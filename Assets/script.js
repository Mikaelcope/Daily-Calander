var currentDay = $('#currentDay')
var day = dayjs().format('DD-MM-YYYY')
var textArea = document.querySelectorAll('.task')
var BTNlist = document.querySelectorAll('.saveBTN')
//Display Current Date//
currentDay.text(day)

var timeColor = document.querySelectorAll('.timeDiv')
// console.log(timeColor)

var currentTime = moment().format('HH')
// console.log(currentTime)


$(document).ready(function () {


    for (i = 0; i < timeColor.length; i++) {
        let calTime = timeColor[i].id;

        // console.log(calTime)
        // console.log(currentTime)

        if (parseInt(calTime) < parseInt(currentTime)) {
            // console.log("grey")
            textArea[i].classList.add('past')
        } else if (parseInt(calTime) === parseInt(currentTime)) {
            textArea[i].classList.add('present')
            // console.log("red")
        } else if (parseInt(calTime) > parseInt(currentTime)) {
            textArea[i].classList.add('future')
            // console.log('green')
        }
    }
    console.log("hello")

    
    console.log(BTNlist)
    for (var j = 0; j < BTNlist.length; j++) {
        BTNlist[j].addEventListener('click', function(event) {
            event.preventDefault()
            // console.log(event.target)
            // console.log(event.target.getAttribute('id'))
            // console.log(event.target.previousElementSibling.value)

            let localStorageData = JSON.parse(localStorage.getItem('work_day_scheduler'))
            console.log(localStorageData)

            if (localStorageData === null){
                localStorageData = []
                localStorageData.push({
                    note: event.target.getAttribute('id'),
                    value: event.target.previousElementSibling.value
                })
            } else {
                localStorageData.push({
                    note: event.target.getAttribute('id'),
                    value: event.target.previousElementSibling.value
                })
            } 
            localStorage.setItem('work_day_scheduler', JSON.stringify(localStorage))
        })
    }
})