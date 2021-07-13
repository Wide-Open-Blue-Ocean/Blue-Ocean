import React from 'react';
import axios from 'axios';
import Column from './Column.jsx';
import Overlay from './Overlay.jsx';
import LinkModal from './LinkModal.jsx';
import dateUtils from '../utils/dateUtils.js';
// goes from 0500 to 2100
export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.loadDates = this.loadDates.bind(this);
    this.loadSessions = this.loadSessions.bind(this);
    this.loadMeals = this.loadMeals.bind(this);
    this.cycleLeft = this.cycleLeft.bind(this);
    this.cycleRight = this.cycleRight.bind(this);
    this._onClick = this._onClick.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      dates: {
        20210711: []
      },


      modal: undefined
    };
  }

  componentDidMount() {
    this.loadDates();
    this.loadSessions();
    this.loadMeals();
  }

  loadSessions() {
    axios.get('/dummySessions')
      .then((response) => {
        var dates = JSON.parse(JSON.stringify(this.state.dates));
        for (var i = 0; i < response.data.length; i++) {
          var session = response.data[i];
          session.type = 'session';
          if (dates[session.date]) {
            dates[session.date].push(session);
          }
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
    axios.get('/dummyMeals')
      .then((response) => {
        var dates = JSON.parse(JSON.stringify(this.state.dates));
        for (var i = 0; i < response.data.length; i++) {
          var session = response.data[i];
          session.type = 'meal';
          if (dates[session.date]) {
            dates[session.date].push(session);
          }
        }
        this.setState({
          dates: dates
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  loadDates() {
    var dayofweek = new Date().getDay();
    var currentTime = new Date(Date.now());
    currentTime.setHours(12); //prevents any errors that could be caused by DST
    var sunday = new Date(currentTime.valueOf() - (24 * 3600 * 1000 * dayofweek));
    sunday = sunday.getFullYear() + (sunday.getMonth() + 1).toString().padStart(2, '0') + sunday.getDate().toString().padStart(2, '0');
    var newDateObject = {};
    newDateObject[sunday] = [];
    for (var i = 1; i <= 6; i++) {
      var nextDate = dateUtils.getFutureOrPast(sunday, i);
      newDateObject[nextDate] = [];
    }
    this.setState({
      dates: newDateObject,
    });
  }


  cycleLeft () {
    var newDateObject = {};
    for (var i = -7; i <= -1; i++) {
      var newDate = dateUtils.getFutureOrPast(Object.keys(this.state.dates)[0], i);
      newDateObject[newDate] = [];
    }
    this.setState({
      dates: newDateObject
    }, () => {
      this.loadSessions();
      this.loadMeals();
    });
  }

  cycleRight () {
    var newDateObject = {};
    for (var i = 7; i <= 13; i++) {
      var newDate = dateUtils.getFutureOrPast(Object.keys(this.state.dates)[0], i);
      newDateObject[newDate] = [];
    }
    this.setState({
      dates: newDateObject
    }, () => {
      this.loadSessions();
      this.loadMeals();
    });
  }

  _onClick(e) {
    if (e.date) { // should only handle events propagated from Column
      // console.log(e.date, e.clientX, e.clientY);
      this.setState({
        modal: {
          x: e.clientX,
          y: e.clientY,
          date: e.date
        }
      });
    }
  }

  closeModal() {
    this.setState({
      modal: undefined
    });
  }

  render() {
    return (
      <div id="calendarContainer">
        <svg style={{cursor: 'pointer', zIndex: 5}} width={40} height={40} onClick={this.cycleLeft} data-name="arrow_left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.65 97.99"><path fill="#ff0000" d="M51.66 2.65L49 0 2.66 46.34h-.01L0 48.99h.01L0 49l2.65 2.66.01-.01L49 97.99l2.66-2.65L5.31 48.99 51.66 2.65z"/></svg>

        <div id="calendarWidget">

          <div id="dateRow">
          {Object.keys(this.state.dates).map(date =>
            <div key={date} className="dateTop">
              <p>{dateUtils.getWeekday(date)}</p>
              <p>{date.slice(4, 6) + ' / ' + date.slice(6, 8)}</p>
            </div>
          )}
          </div>
          <div id="calendar" onClick={this._onClick}>
            <Overlay/>
            {Object.keys(this.state.dates).map(key =>
              <Column events={this.state.dates[key]} key={key} date={key}/>
            )}
          </div>
          {this.state.modal &&
            <LinkModal modal={this.state.modal} closeModal={this.closeModal}/>
          }
        </div>
        <svg style={{ zIndex: 5, cursor: 'pointer'}} width={40} height={40} onClick={this.cycleRight} data-name="arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.65 97.99"><path fill="#ff0000" d="M0 95.34l2.65 2.65 46.34-46.34.01.01L51.66 49l-.01-.01h.01L49 46.34h-.01L2.65 0 0 2.65l46.34 46.34L0 95.34z"/></svg>
      </div>
    );
  }
}