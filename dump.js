
let celsius = document.getElementById('celsius').value
//let fahrenheit = document.getElementById('fahrenheit').value
console.log(celsius)

let celToKel
let fahToKel
let kelToCel
let fahToCel
let kelToFah
let celToFah

function convertToKelvin (){
    //how to convert celcius to kelvin
    celToKel = celsius + 273.15
    fahToKel = (fahrenheit - 32) * 5/9 + 273.15 
}

function convertToCelsius (){
    kelToCel = kelvin - 273.15
    fahToCel = (fahrenheit -32) * 5/9
}

function convertToFahrenheit (){
    kelToFah = (kelvin - 273.15) * 9/5 + 32
    celToFah = (celsius * 9/5) + 32
    console.log(`${kelToFah} , ${celToFah}`)
    console.log("test")
}

form = document.getElementById('form')
console.log(form)

form.addEventListener('keypress', (e) => {
    e.preventDefault()
    

    if (e.key === "Enter"){
        console.log("Enter key has been pressed")
    }

    // convertToFahrenheit()
    // const htmlkelvin = document.getElementById('kelvin')
    // htmlkelvin.innerText = `${kelToFah}`
    







})


