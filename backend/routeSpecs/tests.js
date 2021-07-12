const handleBadRequest = {
  getWorkoutSession: (userId, dateParams) => {
    return new Promise ((resolve, reject) => {
      if (userId === undefined || userId === '' || dateParams.every(param => param === undefined)) {
        reject(['There must be a userId parameter that cannot be set to an empty string AND there must be either a dateRange or date parameter'])
        return;
      }
      if (dateParams[0]) {
        if (Number(dateParams[0]).toString() === 'NaN' || dateParams[0].length !== 8) {
          reject(['The date parameter string must be 8 characters long AND only contain numbers'])
          return;
        }
      } else {
        let dateRange = dateParams[1].split('-')
        if (dateRange.some(date => (Number(date).toString === 'NaN' || date.length !== 8))) {
          reject(['Each date of the dateRange parameter string must be 8 characters long AND only contain numbers'])
          return;
        }
      }
      resolve();
    })
  },

  postWorkoutSession: (entry) => {
    return new Promise ((resolve, reject) => {
      if (entry.userId === undefined
        || entry.sessionName === undefined
        || entry.timeRange === undefined
        || entry.date === undefined
      ) {
          reject([`required keys for this endpoint object are 'userId', 'sessionName', ` +
          `'timeRange', and 'date'`]);
          return;
      }
      let {userId, sessionName, timeRange, date} = entry;
      if (
          typeof userId !== 'number'
        || typeof sessionName !== 'string'
        || typeof timeRange !== 'string'
        || typeof date !== 'string'
          ) {
        reject(['userId must be a number, sessionName must be a string,' +
        ' timeRange must be a string, date must be a number'])
        return;
      }
      // hhmm-hhmm
      if (
         timeRange[4] !== '-'
      || Number(timeRange.substring(0, 4)).toString() === 'NaN'
      || Number(timeRange.substring(5)).toString() === 'NaN'
      ) {
        reject([`timeRange must adhere to format hhmm-hhmm where 'h' and 'm' are numbers`])
      }
      if (Number(date).toString() === 'NaN') {
        reject(['date must only contain numbers within the string'])
      }
      if (date.length !== 8) {
        reject(['date must be 8 characters long representing '])
      }
      resolve();
    })
  },

  deleteWorkoutSession: (sessionName) => {
    return new Promise ((resolve, reject) => {
      resolve();
    })
  },

  getWorkout: (userId, date, sessionName) => {
    return new Promise ((resolve, reject) => {

    })
  },

  postWorkout: (entry) => {
    return new Promise ((resolve, reject) => {

    })
  },

  deleteWorkout: (id) => {
    return new Promise ((resolve, reject) => {

    })
  },
  getWorkoutChecked: (userId, date) => {
    return new Promise ((resolve, reject) => {

    })
  },
  putWorkoutChecked: (id, checked) => {
    return new Promise ((resolve, reject) => {

    })
  }

  // deleteWorkoutBySessionName: () => {

  // },
}

module.exports = {
  handleBadRequest
}