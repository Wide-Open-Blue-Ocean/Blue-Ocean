import React from 'react';
import axios from 'axios';
import dateUtils from '../utils/dateUtils.js';
import DaySelection from './DaySelection.jsx';
import Event from './Event.jsx';
//
export default class MobileCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.loadDates = this.loadDates.bind(this);
    this.loadSessions = this.loadSessions.bind(this);
    this.loadMeals = this.loadMeals.bind(this);
    this.prettySelectedDate = this.prettySelectedDate.bind(this);
    this.selectDay = this.selectDay.bind(this);
    this.cycleLeft = this.cycleLeft.bind(this);
    this.cycleRight = this.cycleRight.bind(this);
    this.openWorkoutWidget = this.openWorkoutWidget.bind(this);
    this.openMealWidget = this.openMealWidget.bind(this);
    this.oneLeft = this.oneLeft.bind(this);
    this.oneRight = this.oneRight.bind(this);
    this.weekTouchStart = this.weekTouchStart.bind(this);
    this.weekTouchMove = this.weekTouchMove.bind(this);
    this.calTouchStart = this.calTouchStart.bind(this);
    this.calTouchMove = this.calTouchMove.bind(this);

    this.state = {
      dates: {
        20210711: []
      },
      selectedDate: '20210711'
    };
  }

  componentDidMount () {
    this.wxDown = null;
    this.wyDown = null;
    this.cxDown = null;
    this.cyDown = null;
    this.loadDates(() => {
      this.loadSessions();
      this.loadMeals();
    });
  }

  loadSessions() {
    axios.get('/workoutSession', {
      params: {
        userId: 0,
        startDate: Object.keys(this.state.dates)[0],
        endDate: Object.keys(this.state.dates)[6]
      }
    })
      .then((response) => {
        var dates = JSON.parse(JSON.stringify(this.state.dates));
        for (var i = 0; i < response.data.length; i++) {
          var session = response.data[i];
          session.type = 'session';
          if (dates[session.date]) {
            dates[session.date].push(session);
          }
        }
        for (var key in dates) {
          dates[key].sort((a, b) => {
            return parseInt(a.timeRange.slice(0, 4)) - parseInt(b.timeRange.slice(0, 4));
          });
        }
        this.setState({
          dates: dates
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  loadMeals() {
    axios.get('/meal', {
      params: {
        userId: 0,
        startDate: Object.keys(this.state.dates)[0],
        endDate: Object.keys(this.state.dates)[6]
      }
    })
      .then((response) => {
        var dates = JSON.parse(JSON.stringify(this.state.dates));
        for (var i = 0; i < response.data.length; i++) {
          var session = response.data[i];
          session.type = 'meal';
          if (dates[session.date]) {
            dates[session.date].push(session);
          }
        }
        for (var key in dates) {
          dates[key].sort((a, b) => {
            return parseInt(a.timeRange.slice(0, 4)) - parseInt(b.timeRange.slice(0, 4));
          });
        }
        this.setState({
          dates: dates
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  prettySelectedDate () {
    var uglyDateString = this.state.selectedDate;
    var dateObj = new Date(uglyDateString.slice(0,4), parseInt(uglyDateString.slice(4, 6)) - 1, uglyDateString.slice(6, 8));
    return dateObj.toDateString().slice(4, 15);
  }

  loadDates(callback = ()=>{}) {
    var dayofweek = new Date().getDay();
    var currentTime = new Date(Date.now());
    currentTime.setHours(12); //prevents any errors that could be caused by DST
    var sunday = new Date(currentTime.valueOf() - (24 * 3600 * 1000 * dayofweek));
    sunday = sunday.getFullYear() + (sunday.getMonth() + 1).toString().padStart(2, '0') +sunday.getDate().toString().padStart(2, '0');
    var today = currentTime.getFullYear() + (currentTime.getMonth() + 1).toString().padStart(2, '0') + currentTime.getDate().toString().padStart(2, '0');
    var newDateObject = {};
    newDateObject[sunday] = [];
    for (var i = 1; i <= 6; i++) {
      var nextDate = dateUtils.getFutureOrPast(sunday, i);
      newDateObject[nextDate] = [];
    }
    this.setState({
      dates: newDateObject,
      selectedDate: today
    }, callback);
  }

  selectDay (dateString) {
    this.setState({
      selectedDate: dateString
    });
  }

  cycleLeft (selectedDate) {
    var newDateObject = {};
    for (var i = -7; i <= -1; i++) {
      var newDate = dateUtils.getFutureOrPast(Object.keys(this.state.dates)[0], i);
      newDateObject[newDate] = [];
    }
    this.setState({
      dates: newDateObject,
      selectedDate: selectedDate || dateUtils.getFutureOrPast(this.state.selectedDate, -7)
    }, () => {
      this.loadSessions();
      this.loadMeals();
    });
  }

  cycleRight (selectedDate) {
    var newDateObject = {};
    for (var i = 7; i <= 13; i++) {
      var newDate = dateUtils.getFutureOrPast(Object.keys(this.state.dates)[0], i);
      newDateObject[newDate] = [];
    }
    this.setState({
      dates: newDateObject,
      selectedDate: selectedDate || dateUtils.getFutureOrPast(this.state.selectedDate, 7)
    }, () => {
      this.loadSessions();
      this.loadMeals();
    });
  }

  openWorkoutWidget () {
    alert(this.state.selectedDate + ' opening workout widget');
  }

  openMealWidget () {
    alert(this.state.selectedDate + ' opening meal widget');
  }

  oneLeft() {
    var current = this.state.selectedDate;
    var yesterday = dateUtils.getFutureOrPast(current, -1);
    if (!this.state.dates[yesterday]) {
      this.cycleLeft(yesterday);
    } else {
      this.selectDay(yesterday);
    }
  }

  oneRight() {
    var current = this.state.selectedDate;
    var tomorrow = dateUtils.getFutureOrPast(current, 1);
    if (!this.state.dates[tomorrow]) {
      this.cycleRight(tomorrow);
    } else {
      this.selectDay(tomorrow);
    }
  }

  weekTouchStart(e) {
    this.wxDown = e.touches[0].clientX;
    this.wyDown = e.touches[0].clientY;
  }

  weekTouchMove(e) {
    if ( ! this.wxDown || ! this.wyDown ) {
      return;
    }
    var xUp = e.touches[0].clientX;
    var yUp = e.touches[0].clientY;
    var xDiff = this.wxDown - xUp;
    var yDiff = this.wyDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 30 ) {
        /* left swipe */
          this.cycleRight();
        } else if ( xDiff < -30) {
        /* right swipe */
          this.cycleLeft();
        }
    } else {
        if ( yDiff > 0 ) {
        /* up swipe */
        } else {
        /* down swipe */
        }
    }
    /* reset values */
    this.wxDown = null;
    this.wyDown = null;
  }

  calTouchStart (e) {
    this.cxDown = e.touches[0].clientX;
    this.cyDown = e.touches[0].clientY;
  }

  calTouchMove (e) {
    if ( ! this.cxDown || ! this.cyDown ) {
      return;
    }
    var xUp = e.touches[0].clientX;
    var yUp = e.touches[0].clientY;
    var xDiff = this.cxDown - xUp;
    var yDiff = this.cyDown - yUp;
    // console.log( xDiff);
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 30 ) {
        /* left swipe */
          this.oneRight();
        } else if ( xDiff < -30){
        /* right swipe */
          this.oneLeft();
        }
    } else {
        if ( yDiff > 0 ) {
        /* up swipe */
        } else {
        /* down swipe */
        }
    }
    /* reset values */
    this.cxDown = null;
    this.cyDown = null;
  }

  render () {
    return (
      <div id="mobileCalendarContainer">
        <div id="mobileDateRow" onTouchStart={this.weekTouchStart} onTouchMove={this.weekTouchMove}>
          <svg style={{cursor: 'pointer', zIndex: 5}} width={30} height={30} onClick={() => {this.cycleLeft()}} data-name="arrow_left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.65 97.99"><path fill="#0000ff" d="M51.66 2.65L49 0 2.66 46.34h-.01L0 48.99h.01L0 49l2.65 2.66.01-.01L49 97.99l2.66-2.65L5.31 48.99 51.66 2.65z"/></svg>
          {Object.keys(this.state.dates).map(date =>
            <DaySelection key={date} date={date} selectDay={this.selectDay} selected={date === this.state.selectedDate}/>
          )}
          <svg style={{zIndex: 5, cursor: 'pointer'}} width={30} height={30} onClick={() => {this.cycleRight()}} data-name="arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.65 97.99"><path fill="#0000ff" d="M0 95.34l2.65 2.65 46.34-46.34.01.01L51.66 49l-.01-.01h.01L49 46.34h-.01L2.65 0 0 2.65l46.34 46.34L0 95.34z"/></svg>
        </div>
        <h1 id="mobileDateBanner">{this.prettySelectedDate()}</h1>
        <div id="mobileEventsContainer" onTouchStart={this.calTouchStart} onTouchMove={this.calTouchMove}>
          <svg style={{cursor: 'pointer', zIndex: 5}} width={60} height={60} onClick={this.oneLeft} data-name="arrow_left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.65 97.99"><path fill="#ff0000" d="M51.66 2.65L49 0 2.66 46.34h-.01L0 48.99h.01L0 49l2.65 2.66.01-.01L49 97.99l2.66-2.65L5.31 48.99 51.66 2.65z"/></svg>
          <div id="mobileEventColumn">
            <React.Fragment>
              {this.state.dates[this.state.selectedDate].map(event =>
                <Event key={event.timeRange} event={event}/>
              )}
              {this.state.dates[this.state.selectedDate].length === 0 &&
                <h2 id="noEventsBanner">No events today</h2>
              }
            </React.Fragment>

          </div>
          <svg style={{zIndex: 5, cursor: 'pointer'}} width={60} height={60} onClick={this.oneRight} data-name="arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.65 97.99"><path fill="#ff0000" d="M0 95.34l2.65 2.65 46.34-46.34.01.01L51.66 49l-.01-.01h.01L49 46.34h-.01L2.65 0 0 2.65l46.34 46.34L0 95.34z"/></svg>
        </div>
        <h2 className="mobileAdd" id="mobileAddWorkout" onClick={this.openWorkoutWidget}>Add Workout</h2>
        <h2 className="mobileAdd" onClick={this.openMealWidget}>Add Meal</h2>
      </div>
    );
  }
}