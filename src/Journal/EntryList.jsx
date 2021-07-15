import React from 'react'
import axios from 'axios'

const EntryList = (props) => {

const deleteEntry = (id) => {
    axios.delete('/journal', {data: {id: id}})
    .then(() => {
        props.getEntries()
    })
    .catch((err) => {
        console.log(err);
    })
}

    return (
        <div className="entryListContainer">{props.entries.map((entry, i) => {
            return (
                <div key={i}>
                    <div className="journalTitleRow">
                      <h3 className="journalH3">Entry # {i + 1}</h3>
                      <button className="entryButton" onClick={() => {deleteEntry(entry._id)}}>delete</button>
                    </div>
                    <div>meal entry : {entry.mealEntry}</div>
                    <div>work out entry : {entry.workoutEntry}</div>
                </div>
            )
        })}</div>
    )
}

export default EntryList