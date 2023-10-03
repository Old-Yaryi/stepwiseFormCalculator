// form Range
const formRange = document.querySelector('.form-inner__range input')
const formRangeProgress = document.querySelector('.form-inner__range-value')
const formRangeGuest = document.querySelector('.form-inner__guest span')
formRange.addEventListener('input', () => {
   let val = ((formRange.value - 10) / 90) * 100 + '%'
   formRangeProgress.style.width = val
   formRangeGuest.innerText = formRange.value
})