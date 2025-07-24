// Conversion functions
function convertFromCelsius(celsius) {
    const kelvin = celsius + 273.15;
    const fahrenheit = (celsius * 9/5) + 32;
    return { kelvin, fahrenheit };
}

function convertFromKelvin(kelvin) {
    const celsius = kelvin - 273.15;
    const fahrenheit = (celsius * 9/5) + 32;
    return { celsius, fahrenheit };
}

function convertFromFahrenheit(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    const kelvin = celsius + 273.15;
    return { celsius, kelvin };
}

// Get the form element (add 'const' or 'let' to properly declare it)
const form = document.getElementById('form');

// Add submit event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the input elements
    const celsiusInput = document.getElementById('celsius');
    const kelvinInput = document.getElementById('kelvin');
    const fahrenheitInput = document.getElementById('fahrenheit');

    // Get the trimmed values from the input fields
    const celsiusValue = celsiusInput.value.trim();
    const kelvinValue = kelvinInput.value.trim();
    const fahrenheitValue = fahrenheitInput.value.trim();

    // Check which field has a value and perform the conversion
    if (celsiusValue !== '') {
        const celsius = parseFloat(celsiusValue);
        if (!isNaN(celsius)) {
            const { kelvin, fahrenheit } = convertFromCelsius(celsius);
            kelvinInput.value = kelvin.toFixed(2);
            fahrenheitInput.value = fahrenheit.toFixed(2);
        } else {
            console.error("Invalid Celsius value");
        }
    } else if (kelvinValue !== '') {
        const kelvin = parseFloat(kelvinValue);
        if (!isNaN(kelvin)) {
            const { celsius, fahrenheit } = convertFromKelvin(kelvin);
            celsiusInput.value = celsius.toFixed(2);
            fahrenheitInput.value = fahrenheit.toFixed(2);
        } else {
            console.error("Invalid Kelvin value");
        }
    } else if (fahrenheitValue !== '') {
        const fahrenheit = parseFloat(fahrenheitValue);
        if (!isNaN(fahrenheit)) {
            const { celsius, kelvin } = convertFromFahrenheit(fahrenheit);
            celsiusInput.value = celsius.toFixed(2);
            kelvinInput.value = kelvin.toFixed(2);
        } else {
            console.error("Invalid Fahrenheit value");
        }
    } else {
        console.error("No value entered");
    }
});