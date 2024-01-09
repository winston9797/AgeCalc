const myForm = document.getElementById('myForm')

myForm.addEventListener('submit',e=>{
    e.preventDefault()
    //get form data
    const formData = new FormData(e.currentTarget)
    //get output dom elements
    const yearOutput = document.getElementById('yearOutput')
    const monthOutput = document.getElementById('monthOutput')
    const dayOutput = document.getElementById('dayOutput')

    const dayInput = formData.get('day').toString()
    const monthInput = formData.get('month').toString()
    const yearInput = formData.get('year').toString()
    //current date
    const currentDate = new Date()
    const birthDate = new Date(`${monthInput}/${dayInput}/${yearInput}`)

    //calculate the year diff
    let Yeardiff = new Date(date1.getTime() - date2.getTime())
    let seconds = Math.abs(Yeardiff / 1000)
    let min = Math.abs(seconds / 60)
    let hours  = Math.abs(min / 60)
    let days = Math.abs(hours / 24)
    let months  = Math.abs(days / 30)
    let years  = Math.abs(months / 12)


    //output results to user
    dayOutput.innerHTML = Math.ceil(days)
    monthOutput.innerHTML = Math.ceil(months)
    yearOutput.innerHTML = Math.ceil(years)
})

//calc age base on year
const date1 = new Date('06/25/1997');
const date2 = new Date('06/25/2024');
let Yeardiff = new Date(date1.getTime() - date2.getTime())
let seconds = Yeardiff / 1000
let min = seconds / 60
let hours  = min / 60
let days = hours / 24
let months  = days / 30
let years  = months / 12

//value lost after . in float number is the exact month value
//console.log(Math.abs(Math.ceil(years)))
//console.log(Math.abs(Math.ceil(months)))
//console.log(Math.abs(Math.ceil(days)))
//validation 

//form on submit make sure year is less than this year 
//must be in the past and must be 4 numbers

//on submit make sure day is less than 31 zand two numbers

//make sure mounth is less than 12 and two numbers