function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;
    const resultDiv = document.getElementById('result');

    // Check if the input is a valid number
    if (isNaN(temperature)) {
        resultDiv.innerText = "Please enter a valid number.";
        return;
    }

    let result;

    // Perform conversion based on selected units
    if (fromUnit === toUnit) {
        result = temperature;
    } else if (fromUnit === 'Celsius' && toUnit === 'Fahrenheit') {
        result = (temperature * 9 / 5) + 32;
    } else if (fromUnit === 'Celsius' && toUnit === 'Kelvin') {
        result = temperature + 273.15;
    } else if (fromUnit === 'Fahrenheit' && toUnit === 'Celsius') {
        result = (temperature - 32) * 5 / 9;
    } else if (fromUnit === 'Fahrenheit' && toUnit === 'Kelvin') {
        result = (temperature - 32) * 5 / 9 + 273.15;
    } else if (fromUnit === 'Kelvin' && toUnit === 'Celsius') {
        result = temperature - 273.15;
    } else if (fromUnit === 'Kelvin' && toUnit === 'Fahrenheit') {
        result = (temperature - 273.15) * 9 / 5 + 32;
    }

    // Display the result
    resultDiv.innerText = `Converted Temperature: ${result.toFixed(2)} °${toUnit[0]}`;
}
