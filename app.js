const myForm = document.getElementById('myForm')

myForm.addEventListener('submit',e=>{
    e.preventDefault()

    //get form data
    const formData = new FormData(e.currentTarget)
    const dayInput = formData.get('day').toString()
    const monthInput = formData.get('month').toString()
    const yearInput = formData.get('year').toString()
    //validation rules
    if(dayInput > 31 || dayInput == ''){
        document.querySelector('.dayError').style.display = 'inline'
        document.querySelector('.day').style.outline = '1px solid red'
        return
    }
    if(monthInput > 12 || monthInput == ''){
        document.querySelector('.monthError').style.display = 'inline'
        document.querySelector('.month').style.outline = '1px solid red'
        return
    }
    const currentYear = new Date().getFullYear()
    if(yearInput > currentYear || monthInput == ''){
        document.querySelector('.yearError').style.display = 'inline'
        document.querySelector('.year').style.outline = '1px solid red'
        return
    }

    console.log()
    
    //get output dom elements
    const yearOutput = document.getElementById('yearOutput')
    const monthOutput = document.getElementById('monthOutput')
    const dayOutput = document.getElementById('dayOutput')
    //current date
    const currentDate = new Date()
    const birthDate = new Date(`${monthInput}/${dayInput}/${yearInput}`)

    //calc year diffrence 
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    // Adjust negative months or days //ty @manjubhaskar02
    if (days < 0) {
        months--;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }
    //output results to user
    dayOutput.innerHTML = Math.ceil(days)
    monthOutput.innerHTML = Math.ceil(months)
    yearOutput.innerHTML = Math.ceil(years)
})

