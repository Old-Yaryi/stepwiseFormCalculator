// form Guest quantity
const formRange = document.querySelector('.form-inner__range input')
const formRangeProgress = document.querySelector('.form-inner__range-value')
const formRangeGuest = document.querySelector('.form-inner__guest span')
formRange.addEventListener('input', () => {
   let val = ((formRange.value - 10) / 90) * 100 + '%'
   formRangeProgress.style.width = val
   formRangeGuest.innerText = formRange.value
})
// form Calendar
const formCalendar = document.querySelector('.form-inner__calendar')
const formMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
let date = new Date()
function setAtctualDate(){
   formCalendar.innerHTML = `<div>${date.getDate()}</div><div>${formMonth[date.getMonth()]}</div><div>${date.getFullYear()}</div>`
}
setAtctualDate()