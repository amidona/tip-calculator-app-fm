const billInput = parseFloat(document.querySelector("[name='bill-input']").value);
const customTip = document.querySelector("[name='custom-tip']");
const peopleInput = parseFloat(document.querySelector("[name='people-input']").value);
const inputs = document.querySelectorAll("input");
const tipOwed = document.querySelector("#tip-owed");
const totalOwed = document.querySelector("#total-owed");
const tipButtons = document.querySelectorAll(".tip-button");
const resetButton = document.querySelector("#reset");

function calculateTotal(e) {
    totalOwed.innerText = parseFloat((billInput / peopleInput).toFixed(2));
    console.log("Hi!")
}

inputs.forEach(input => input.addEventListener("input", calculateTotal))