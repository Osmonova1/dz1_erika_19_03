
let phoneInput = document.querySelector('.phoneInput')
let phoneButton = document.querySelector('.button')
let result = document.querySelector('.result')

let regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/ig



phoneButton.addEventListener('click',() => {
  if(regExp.test(phoneInput.value)){
    result.innerText = 'Success'
    result.style.color  = 'green'
    alert('success')
  }else {
    result.innerText = 'Failed'
    result.style.color = 'red'
    alert('Error')
  }
})

//2 inn
let innInput = document.querySelector('#INN')
let check = document.querySelector('#check')
let resultInn = document.querySelector('.resultInn')

let regInn= /^[1-2]\d{13}$/

check.addEventListener('click',() => {
  if(regInn.test(innInput.value)){
    resultInn.innerText = 'Success'
    resultInn.style.color  = 'green'
    alert('success')
  }else {
    resultInn.innerText = 'Failed'
    resultInn.style.color = 'red'
    alert('Error')
  }
})




























