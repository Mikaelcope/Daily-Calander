var currentDay = $('#currentDay');
var day = dayjs().format('DD-MM-YYYY');
currentDay.text(day);

var currentTime = dayjs().format('DD,MM-YYYY HH:mm:ss');
console.log(currentTime)