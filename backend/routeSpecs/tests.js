const handleBadRequest = {
  workoutSession: (userId, dateParams) => {
    return new Promise ((resolve, reject) => {
      if (userId === undefined || userId === '' || dateParams.every(param => param === undefined)) {
        reject(['There must be a userId parameter that cannot be set to an empty string AND there must be either a dateRange or date parameter'])
        return;
      }
      if (dateParams[0]) {
        if (Number(dateParams[0]).toString() === 'NaN' || date.length !== 8) {
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
  }
}

module.exports = {
  handleBadRequest
}