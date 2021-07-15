import React from 'react'

const EntryList = (props) => {
    return (
        <div className="entryListContainer">{props.entries.map((entry, i) => {
            return (
                <div key={i}>
                    <div>entry # {i + 1}</div>
                    <div>meal entry : {entry.mealEntry}</div>
                    <div>work out entry : {entry.workoutEntry}</div>
                </div>
            )
        })}</div>
    )
}

export default EntryList





