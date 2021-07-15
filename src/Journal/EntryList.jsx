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
                    <div>entry # {i + 1}</div>
                    <button onClick={() => {deleteEntry(entry._id)}}>delete</button>
                    <div>meal entry : {entry.mealEntry}</div>
                    <div>work out entry : {entry.workoutEntry}</div>
                </div>
            )
        })}</div>
    )
}

export default EntryList