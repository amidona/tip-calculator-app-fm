const billInput = document.querySelector("[name='bill-input']");
const customTip = document.querySelector("[name='custom-tip']");
const peopleInput = document.querySelector("[name='people-input']");
const inputs = document.querySelectorAll("input");
const tipOwed = document.querySelector("#tip-owed");
const totalOwed = document.querySelector("#total-owed");
const tipButtons = document.querySelectorAll(".tip-button");
const resetButton = document.querySelector("#reset");
let buttonValue = 0;


tipButtons.forEach(button => button.addEventListener("click", function() {
    buttonValue = parseFloat(this.value) / 100;
    tipButtons.forEach(button => button.style.background = "hsl(183, 100%, 15%)")
    tipButtons.forEach(button => button.style.color = "white");
    this.style.background = "hsl(172, 67%, 45%)";
    this.style.color = "hsl(183, 100%, 15%)";
    console.log(buttonValue);
    inputs.forEach(input => input.addEventListener("blur", function() {
        if (billInput.value === "") {
            totalOwed.innerText = `$${0.00}`;
            tipOwed.innerText = `$${0.00}`;
        } else if (billInput.value !== "" && peopleInput.value === "") {
            tipOwed.innerText = `$${(parseFloat(billInput.value) * buttonValue).toFixed(2)}`;
            totalOwed.innerText = `$${(parseFloat(billInput.value) + (parseFloat(billInput.value) * buttonValue)).toFixed(2)}`;
        } else if (billInput.value && peopleInput.value !== "") {
            tipOwed.innerText = `$${(parseFloat(billInput.value) * buttonValue / parseFloat(peopleInput.value)).toFixed(2)}`;
            totalOwed.innerText = `$${(((parseFloat(billInput.value) + (parseFloat(billInput.value) * buttonValue)) / parseFloat(peopleInput.value)).toFixed(2))}`;
        }
    }))
}))






