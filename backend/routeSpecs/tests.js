const handleBadRequest = {
  getWorkoutSession: (userId, date, startDate, endDate) => {
    return new Promise ((resolve, reject) => {
      if (userId === undefined) {
        reject(['There must be a userId parameter that cannot be set to an empty string'])
        return;
      }
      if (date === undefined) {
        if (startDate === undefined || endDate === undefined) {
          reject(['If date is undefined, then startDate and endDate must have values'])
          return;
        }
        if (startDate.toString().length !== 8 || endDate.toString().length !== 8) {
          reject(['startDate and endDate must be an 8 digit number']);
          return;
        }
      } else {
        if (date.toString().length !== 8) {
          reject(['date must be an 8 digit number']);
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
        || typeof date !== 'number'
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
        return;
      }
      if (timeRange.length !== 9) {
        reject(['timeRange must be a string of 4 digits followed by a hyphen followed by 4 more digits'])
        return;
      }
      if (date.toString().length !== 8) {
        reject(['date must be 8 digits long'])
        return;
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
      resolve()
    })
  },

  postWorkout: (entry) => {
    return new Promise ((resolve, reject) => {
      resolve()
    })
  },

  deleteWorkout: (id) => {
    return new Promise ((resolve, reject) => {
      resolve()
    })
  },
  getWorkoutChecked: (userId, date) => {
    return new Promise ((resolve, reject) => {
      resolve()
    })
  },
  putWorkoutChecked: (id, checked) => {
    return new Promise ((resolve, reject) => {
      resolve()
    })
  }

  // deleteWorkoutBySessionName: () => {

  // },
}

module.exports = {
  handleBadRequest
}