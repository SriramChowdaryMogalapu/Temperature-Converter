let fahrenheit = document.querySelector("#fahrenheit");
let celsius = document.querySelector("#celsius");
let tempConvert = document.querySelector("#btn");

var tempSwitch = 1

function changeFocus1(val) {
    tempSwitch = val;
}

tempConvert.addEventListener
    (
        "click",
        () => {
            if (tempSwitch == 1)
                fahrenheit.value = (parseInt(celsius.value) * 1.8) + 32;
            else
                celsius.value = (parseInt(fahrenheit.value) - 32) / 1.8;
        }
    );