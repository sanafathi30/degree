let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("Fahrenheit");
let kelvin = document.getElementById("Kelvin");



function celToFar() {
    let output = (parseFloat(celsius.value) * 9 / 5) + 32;

    fahrenheit.value = parseFloat(output.toFixed(2));

    output = (parseFloat(celsius.value) + 273);

    kelvin.value = parseFloat(output.toFixed(2));
}


function farToCel() {
    let output = (parseFloat(fahrenheit.value) - 32) * 5 / 9;

    celsius.value = parseFloat(output.toFixed(2));
    output = (parseFloat(fahrenheit.value) + 459) * 5 / 9;
    kelvin.value = parseFloat(output.toFixed(2));
}

function keltocel() {

    let output = (parseFloat(kelvin.value) - 273);

    celsius.value = parseFloat(output.toFixed(2));

    output = (parseFloat(kelvin.value) * 9 / 5) - 459;

    fahrenheit.value = parseFloat(output.toFixed(2));

}