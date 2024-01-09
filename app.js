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
    console.log(currentDate)
    const birthDate = new Date(`${monthInput}/${dayInput}/${yearInput}`)

    //calculate the year diff
    let Yeardiff = new Date(currentDate.getTime() - birthDate.getTime())
    let seconds = Math.abs(Yeardiff / 1000)
    let min = Math.abs(seconds / 60)
    let hours  = Math.abs(min / 60)
    let days = Math.abs(hours / 24)
    let months  = Math.abs(days / 30)
    let years  = Math.abs(months / 12)  - 1


    //output results to user
    dayOutput.innerHTML = Math.ceil(days)
    monthOutput.innerHTML = Math.ceil(months)
    yearOutput.innerHTML = Math.ceil(years)
})

