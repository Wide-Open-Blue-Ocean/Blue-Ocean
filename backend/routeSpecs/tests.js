const shouldBeEightDigitsLong = (number) => {
  let actual = number.toString().length
  return actual !== 8 ? [`date should be 8 digits long, but was ${actual}`] : true;
}

const parameterShouldExist = (paramName, paramValue) => {
  return paramValue === undefined ? [`Make sure ${paramName} is passed through as a parameter`] : false;
}

const shouldBeAType = (requiredType, fieldName, fieldValue) => {
  if (requiredType === 'number') {
    fieldValue = Number(fieldValue)
    if (fieldValue.toString() === 'NaN') {
      return [`${fieldName} should be a ${requiredType}, but not ${fieldValue}`]
    }
  }
  return typeof fieldValue !== requiredType ? [`${fieldName} should be a ${requiredType}, but was a ${typeof fieldValue}`] : false;
}

const handleBadRequest = {

  getUser: (userId) => {
    return new Promise ((resolve, reject) => {
      let result = parameterShouldExist('userId', userId)
      let result2 = shouldBeAType('number','userId', userId)

      result ? reject(result)
        : result2 ? reject(result2) : resolve()
    })
  },

  postUser: (entry) => {
    return new Promise ((resolve, reject) => {

      let result = parameterShouldExist('entry.userId', entry.userId)
      let result2 = parameterShouldExist('entry.name', entry.name)
      let result3 = parameterShouldExist('entry.email', entry.email)
      let result4 = shouldBeAType('number', 'entry.userId', entry.userId)
      let result5 = shouldBeAType('string', 'entry.name', entry.name)
      let result6 = shouldBeAType('string', 'entry.email', entry.email)
      result ? reject(result)
      : result2 ? reject(result2)
      : result3 ? reject(result3)
      : result4 ? reject(result4)
      : result5 ? reject(result4)
      : result6 ? reject(result6) : resolve()
    })
  },

  deleteUser: (id) => {
    return new Promise ((resolve, reject) => {

      let result = parameterShouldExist('id', id)
      let result2 = shouldBeAType('number', 'id', id)
      result ? reject(result)
        : result2 ? reject(result2) : resolve();
    })
  },




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
    let result = parameterShouldExist('sessionName', sessionName)
    let result2 = shouldBeAType('string', 'sessionName', sessionName)
    result ? reject(result)
      : result2 ? reject(result2) : resolve();
    })
  },



  getWorkout: (userId, date, sessionName) => {
    return new Promise ((resolve, reject) => {
      let result = parameterShouldExist('userId', userId)
      let result2 = parameterShouldExist('sessionName', sessionName)
      let result3 = parameterShouldExist('date', date)
      let result4 = shouldBeAType('number', 'userId', userId)
      let result5 = shouldBeAType('string', 'sessionName', sessionName)
      let result6 = shouldBeAType('number', 'date', date)
      let result7 = shouldBeEightDigitsLong(date)

      result ? reject(result)
        : result2 ? reject(result2)
        : result3 ? reject(result3)
        : result4 ? reject(result4)
        : result5 ? reject(result5)
        : result6 ? reject(result6)
        : result7 ? reject(result7) : resolve
      resolve()
    })
  },
  postWorkout: (entry) => {
    return new Promise ((resolve, reject) => {
      //entry.userId should be a number
      let result = parameterShouldExist('entry.userId', entry.userId)
      let result2 = parameterShouldExist('entry.sessionName', entry.sessionName)
      let result3 = parameterShouldExist('entry.exercise', entry.exercise)
      let result4 = parameterShouldExist('entry.description', entry.description)
      let result5 = parameterShouldExist('entry.calories', entry.calories)
      let result6 = parameterShouldExist('entry.date', entry.date)
      let result7 = parameterShouldExist('entry.checked', entry.checked)
      let result8 = shouldBeAType('number', 'entry.userId', entry.userId)
      let result9 = shouldBeAType('string', 'entry.sessionName', entry.sessionName)
      let result10 = shouldBeAType('string', 'entry.exercise', entry.exercise)
      let result11 = shouldBeAType('string', 'entry.description', entry.description)
      let result12 = shouldBeAType('string', 'entry.calories', entry.calories)
      let result13 = shouldBeAType('string', 'entry.date', entry.date)
      let result14 = shouldBeAType('boolean', 'entry.checked', entry.checked)
      let result15 = shouldBeEightDigitsLong(entry.date)

      result ? reject(result)
        : result2 ? reject(result2)
        : result3 ? reject(result3)
        : result4 ? reject(result4)
        : result5 ? reject(result5)
        : result6 ? reject(result6)
        : result7 ? reject(result7)
        : result8 ? reject(result8)
        : result9 ? reject(result9)
        : result10 ? reject(result10)
        : result11 ? reject(result11)
        : result12 ? reject(result12)
        : result13 ? reject(result13)
        : result14 ? reject(result14)
        : result15 ? reject(result15) : resolve()
    })
  },
  deleteWorkout: (id) => {
    return new Promise ((resolve, reject) => {
      let result = shouldBeAType('number', 'id', id)
      let result2 = parameterShouldExist('id', id)
      result ? reject(result)
        : result2 ? reject(result) : resolve()
    })
  },

  getWorkoutChecked: (userId, date) => {
    return new Promise ((resolve, reject) => {
      let result = parameterShouldExist('userId', userId)
      let result2 = parameterShouldExist('date', date)
      let result3 = shouldBeAType('number', 'userId', userId)
      let result4 = shouldBeAType('number', 'date', date)
      let result5 = shouldBeEightDigitsLong(date)

      result ? reject(result)
        : result2 ? reject(result2)
        : result3 ? reject(result3)
        : result4 ? reject(result4)
        : result5 ? reject(result5) : resolve()
    })
  },
  putWorkoutChecked: (id, checked) => {
    return new Promise ((resolve, reject) => {
      let result = parameterShouldExist('id', id)
      let result2 = parameterShouldExist('checked', checked)
      let result3 = shouldBeAType('number', 'number', number)
      let result4 = shouldBeAType('boolean', 'checked', checked)

      result ? reject(result)
        : result2 ? reject(result2)
        : result3 ? reject(result3)
        : result4 ? reject(result4) : resolve()
    })
  },
  deleteWorkoutBySessionName: (sessionName) => {
    return new Promise ((resolve, reject) => {
      let result = parameterShouldExist('sessionName', sessionName)
      let result2 = shouldBeAType('string', 'sessionName', sessionName)
      result ? reject(result)
        :result2 ? reject(result2) : resolve()
    })
  },





  getFood: (userId, date, mealName) => {
    return new Promise ((resolve, reject) => {
      let result = parameterShouldExist(userId)
      let result2 = parameterShouldExist(date)
      let result3 = parameterShouldExist(mealName)
      let result4 = shouldBeAType(userId)
      let result5 = shouldBeAType(date)
      let result6 = shouldBeAType(mealName)
      let result7 = shouldBeEightDigitsLong(date)

      result ? reject(result)
        : result2 ? reject(result2)
        : result3 ? reject(result3)
        : result4 ? reject(result4)
        : result5 ? reject(result5)
        : result6 ? reject(result6)
        : result7 ? reject(result7) : resolve()

      resolve()
    })
  },
  postFood: (entry) => {
    return new Promise ((resolve, reject) => {
      let result = parameterShouldExist('userId', userId)
      let result2 = parameterShouldExist('mealName', mealName)
      let result3 = parameterShouldExist('item', item)
      let result4 = parameterShouldExist('description', description)
      let result5 = parameterShouldExist('calories', calories)
      let result6 = parameterShouldExist('date', date)
      let result7 = parameterShouldExist('checked', checked)
      let result8 = shouldBeAType('number', 'userId', userId)
      let result9 = shouldBeAType('string', 'mealName', mealName)
      let result10 = shouldBeAType('string', 'item', item)
      let result11 = shouldBeAType('string', 'description', description)
      let result12 = shouldBeAType('number', 'calories', calories)
      let result13 = shouldBeAType('number', 'date', date)
      let result14 = shouldBeAType('boolean', 'checked', checked)
      let result15 = shouldBeEightDigitsLong(date)

      result ? reject(result)
        :result2 ? reject(result2)
        :result3 ? reject(result3)
        :result4 ? reject(result4)
        :result5 ? reject(result5)
        :result6 ? reject(result6)
        :result7 ? reject(result7)
        :result8 ? reject(result8)
        :result9 ? reject(result9)
        :result10 ? reject(result10)
        :result11 ? reject(result11)
        :result12 ? reject(result12)
        :result13 ? reject(result13)
        :result14 ? reject(result14)
        :result15 ? reject(result15) : resolve()
    })
  },
  getFoodChecked: (userId, date) => {
    return new Promise ((resolve, reject) => {
      //userId should be a number
      let result = parameterShouldExist('userId', userId)
      let result2 = parameterShouldExist('date', date)
      let result3 = shouldBeAType('number', 'userId', userId)
      let result4 = shouldBeAType('number', 'date', date)
      let result5 = shouldBeEightDigitsLong(date)

      result ? reject(result)
        : result2 ? reject(result2)
        : result3 ? reject(result3)
        : result4 ? reject(result4)
        : result5 ? reject(result5) : resolve()
    })
  },
  putFoodChecked: (id, checked) => {
    return new Promise ((resolve, reject) => {
      let result = parameterShouldExist('id', id)
      let result2 = parameterShouldExist('checked', checked)
      let result3 = shouldBeAType('number', 'id', id)
      let result4 = shouldBeAType('boolean', 'checked', checked)

      result ? reject(result)
        : result2 ? reject(result2)
        : result3 ? reject(result3)
        : result4 ? reject(result4) : resolve()
    })
  },
  deleteFood: (id) => {
    return new Promise ((resolve, reject) => {
      let result = parameterShouldExist('id', id)
      let result2 = shouldBeAType('number', 'id', id)

      result ? reject(result)
        : result2 ? reject(result2) : resolve
    })
  },
  deleteFoodByMeal: (mealName) => {
    return new Promise ((resolve, reject) => {
      let result = parameterShouldExist('mealName', mealName)
      let result2 = shouldBeAType('string', 'mealName', mealName)

      result ? reject(result)
        : result2 ? reject(result2) : resolve()
    })
  },



  postMeal: (entry) => {
    return new Promise ((resolve, reject) => {
      let result = parameterShouldExist('entry.userId', entry.userId)
      let result2 = parameterShouldExist('entry.mealEntry', entry.mealEntry)
      let result3 = parameterShouldExist('entry.workoutEntry', entry.workoutEntry)
      let result4 = parameterShouldExist('entry.date', entry.date)
      let result5 = shouldBeAType('number', 'entry.userId', entry.userId)
      let result6 = shouldBeAType('string', 'entry.mealEntry', entry.mealEntry)
      let result7 = shouldBeAType('string', 'entry.workoutEntry', entry.workoutEntry)
      let result8 = shouldBeAType('number', 'entry.date', entry.date)
      let result9 = shouldBeEightDigitsLong(date)

      result ? reject(result)
        : result2 ? reject(result2)
        : result3 ? reject(result3)
        : result4 ? reject(result4)
        : result5 ? reject(result5)
        : result6 ? reject(result6)
        : result7 ? reject(result7)
        : result8 ? reject(result8)
        : result9 ? reject(result9) : resolve();
    })
  },
  getMeal: (userId, date, startDate, endDate) => {
    return new Promise ((resolve, reject) => {
      let result = parameterShouldExist('userId', userId)
      let result2 = parameterShouldExist('date', date)
      let result3 = parameterShouldExist('startDate', startDate)
      let result4 = parameterShouldExist('endDate', endDate)
      let result5 = shouldBeAType('number', userId)
      let result6 = shouldBeAType('number', date)
      let result7 = shouldBeAType('number', startDate)
      let result8 = shouldBeAType('number', endDate)
      let result9 = shouldBeEightDigitsLong(date)
      let result10 = shouldBeEightDigitsLong(startDate)
      let result11 = shouldBeEightDigitsLong(endDate)

      if (date) {
        if (result9) {
          reject(result9)
        }
      } else if (result10) {
        reject(result10)
      } else if (result11) {
        reject(result11)
      }


      result ? reject(result)
        : result2 ? reject(result2)
        : result3 ? reject(result3)
        : result4 ? reject(result4)
        : result5 ? reject(result5)
        : result6 ? reject(result6)
        : result7 ? reject(result7)
        : result8 ? reject(result8) : resolve();
    })
  },
  deleteMeal: (mealName) => {
    return new Promise ((resolve, reject) => {
      let result = parameterShouldExist('mealName', mealName)
      let result2 = shouldBeAType('string','mealName', mealName)

      result ? reject(result)
        : result2 ? reject(result2) : resolve()
    })
  },



  getJournalEntry: (userId, date, startDate, endDate) => {
    return new Promise ((resolve, reject) => {
      let result = parameterShouldExist('userId', userId)
      let result2 = parameterShouldExist('date', date)
      let result3 = parameterShouldExist('startDate', startDate)
      let result4 = parameterShouldExist('endDate', endDate)
      let result5 = shouldBeAType('number', 'userId', userId)
      let result6 = shouldBeAType('number', 'date', date)
      let result7 = shouldBeAType('number', 'startDate', startDate)
      let result8 = shouldBeAType('number', 'endDate', endDate)

      if (date) {
        if (result6) {
          reject(result6)
        }
      } else if (result7) {
          reject(result7)
      } else if (result8) {
        reject(result8)
      }
      result ? reject(result)
        : result2 ? reject(result2)
        : result3 ? reject(result3)
        : result4 ? reject(result4)
        : result5 ? reject(result5) : resolve()
    })
  },
  postJournalEntry: (entry) => {
    return new Promise ((resolve, reject) => {
      let result = parameterShouldExist('entry.userId', entry.userId)
      let result2 = parameterShouldExist('entry.date', entry.date)
      let result3 = parameterShouldExist('entry.startDate', entry.startDate)
      let result4 = parameterShouldExist('entry.endDate', entry.endDate)
      let result5 = shouldBeAType('number', 'entry.userId', entry.userId)
      let result6 = shouldBeAType('number', 'entry.date', entry.date)
      let result7 = shouldBeAType('number', 'entry.startDate', entry.startDate)
      let result8 = shouldBeAType('number', 'entry.endDate', entry.endDate)
      let result9 = shouldBeEightDigitsLong(date)
      let result10 = shouldBeEightDigitsLong(startDate)
      let result11 = shouldBeEightDigitsLong(endDate)

      if (date) {
        if (result9) {
          reject(result9)
        }
      } else if (result10) {
        reject(result10)
      } else if (result11) {
        reject(result11)
      }

      result ? reject(result)
        : result2 ? reject(result2)
        : result3 ? reject(result3)
        : result4 ? reject(result4)
        : result5 ? reject(result5)
        : result6 ? reject(result6)
        : result7 ? reject(result7)
        : result8 ? reject(result8) : resolve()
    })
  },
  deleteJournalEntry: (id) => {
    return new Promise ((resolve, reject) => {
      let result = parameterShouldExist('id', id)
      let result2 = shouldBeAType('number', 'id', id)

      result ? reject(result)
        : result2 ? reject(result2) : resolve()
      resolve()
    })
  }
}

module.exports = {
  handleBadRequest
}