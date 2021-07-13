const dateUtils = {
  //can get the future or the past!
  getFutureOrPast : function (yyyymmdd, add) {
    var currentDate = new Date(yyyymmdd.slice(0,4), parseInt(yyyymmdd.slice(4,6)) - 1, yyyymmdd.slice(6,8), 12);
    var ms = currentDate.valueOf() + (24 * 3600 * 1000 * add);
    var newDate = new Date(ms);
    var string = newDate.getFullYear() + (newDate.getMonth() + 1).toString().padStart(2, '0') + newDate.getDate().toString().padStart(2, '0');
    return string;
  },
  //returns three character weekday abbreviation
  getWeekday: function(yyyymmdd) {
    var currentDate = new Date(yyyymmdd.slice(0,4), parseInt(yyyymmdd.slice(4,6)) - 1, yyyymmdd.slice(6,8), 12);
    return currentDate.toDateString().split(' ')[0];
  }
};
export default dateUtils;