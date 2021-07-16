import React from 'react'
import axios from 'axios'
import dateUtils from '../utils/dateUtils'
import Journal from './journal'

const EntryList = (props) => {
console.log('this is props', props)
const deleteEntry = (id) => {
    axios.delete('/journal', {data: {id: id}})
    .then(() => {
        props.getEntries()
    })
    .catch((err) => {
        console.log(err);
    })
}
const months = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec'
}



const dateFormatter = (date) => {
    let month = date.substring(4, 6)
    let day = date.substring(6)
    month = months[month]
    return `${month} ${day}`
}

    return (
        <div className="entryListContainer" >{props.entries.map((entry, i) => {
            return (
                <div className="journalEntry" key={i}>
                    <hr></hr>
                    <div className="journalTitleRow">
                      <h3 className="journalH3">{`${dateUtils.getWeekday(entry.date.toString())} • ${dateFormatter(entry.date.toString())}`}</h3>
                      <button className="entryDeleteButton" onClick={() => {deleteEntry(entry._id)}}>X</button>
                    </div>
                    <div className="mealEntryWrapper">
                       <div className="mealEntry"><img className="mealIcon"src="./journalAssets/mealIcon.png"></img>  {entry.mealEntry}</div>
                    </div>
                    <div className="workoutEntryWrapper">
                      <div className="workoutEntry"><img className="workoutIcon"src="./journalAssets/workoutIcon.png"></img>  {entry.workoutEntry}</div>
                    </div>

                </div>
            )
        })}</div>
    )
}

export default EntryList