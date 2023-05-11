const billInput = document.querySelector("[name='bill-input']");
const customTip = document.querySelector("[name='custom-tip']");
const peopleInput = document.querySelector("[name='people-input']");
const inputs = document.querySelectorAll("input");
const buttons = document.querySelectorAll("button");
const tipOwed = document.querySelector("#tip-owed");
const totalOwed = document.querySelector("#total-owed");
const tipButtons = document.querySelectorAll(".tip-button");
const resetButton = document.querySelector("#reset");
let buttonValue = 0;

function dealWithInputs(e) {
    //console.log(e.target, e.target.value, e.target.type)
    if (e.target.type === "submit") {
        buttonValue = parseFloat(e.target.value) / 100;
        tipButtons.forEach(button => button.style.background = "hsl(183, 100%, 15%)")
        tipButtons.forEach(button => button.style.color = "white");
        e.target.style.background = "hsl(172, 67%, 45%)";
        e.target.style.color = "hsl(183, 100%, 15%)";
        //console.log(buttonValue);
    } else if (e.target.name === "custom-tip") {
        buttonValue = parseFloat(e.target.value) / 100;
        tipButtons.forEach(button => button.style.background = "hsl(183, 100%, 15%)")
        tipButtons.forEach(button => button.style.color = "white"); 
    }
    if (billInput.value === "") {
        totalOwed.innerText = "$0.00";
        tipOwed.innerText = "$0.00";
    } else if (billInput.value !== "" && peopleInput.value === "") {
        tipOwed.innerText = `$${(parseFloat(billInput.value) * buttonValue).toFixed(2)}`;
        totalOwed.innerText = `$${(parseFloat(billInput.value) + (parseFloat(billInput.value) * buttonValue)).toFixed(2)}`;
    } else if (billInput.value && peopleInput.value !== "") {
        tipOwed.innerText = `$${(parseFloat(billInput.value) * buttonValue / parseFloat(peopleInput.value)).toFixed(2)}`;
        totalOwed.innerText = `$${(((parseFloat(billInput.value) + (parseFloat(billInput.value) * buttonValue)) / parseFloat(peopleInput.value)).toFixed(2))}`;
    }
    resetButton.style.background = "hsl(172, 67%, 45%)";
    resetButton.disabled = false;
    resetButton.style.pointerEvents = "all";
}

tipButtons.forEach(button => button.addEventListener("click", dealWithInputs));
inputs.forEach(input => input.addEventListener("keyup", dealWithInputs));

function inputErrors (e) {
    const regex = new RegExp(/[1-9]/g);
    if(regex.test(e.target.value)) {
        e.target.style.outline = "hsl(172, 67%, 45%)";
        e.target.previousElementSibling.innerText = "";
    } else if (e.target.value === "" || "0") {
        e.target.style.outline = "solid orange";
        e.target.previousElementSibling.innerText = "Can't be zero";
    } else {
        e.target.style.outline = "solid orange";
        e.target.previousElementSibling.innerText = "Numbers only";
    }
}

customTip.addEventListener("keyup", function(e) {
    const regex = new RegExp(/[a-z]/gi);
    if(!regex.test(e.target.value)) {
        e.target.style.outline = "none";
    } else {
        e.target.style.outline = "solid orange";
    }
});

billInput.addEventListener("keyup", inputErrors);
peopleInput.addEventListener("keyup", inputErrors);

function reset() {
    tipButtons.forEach(button => button.style.background = "hsl(183, 100%, 15%)")
    tipButtons.forEach(button => button.style.color = "white"); 
    inputs.forEach(input => input.value = "");
    inputs.forEach(input => input.style.border = "none");
    totalOwed.innerText = "$0.00";
    tipOwed.innerText = "$0.00";
    resetButton.style.background = "hsl(186, 14%, 43%)";
    resetButton.disabled = true;
    resetButton.style.pointerEvents = "none";
    //console.log("I'm working");
}

resetButton.addEventListener("click", reset);
window.addEventListener("load", reset);

resetButton.onmouseover = () => resetButton.style.background = "hsl(185, 41%, 84%)";
resetButton.onmouseout = () => resetButton.style.background = "hsl(172, 67%, 45%)";