const displayValue = "";
let buttons = document.querySelectorAll(".numberClass")
const display = document.getElementById("current-display");
let currentText = "";
console.log(display)

//add event listeners on click for number buttons
for (button of buttons) {
    button.addEventListener('click', pushButtonN)}
//add event listeners on click for function buttons


//add
function add(a, b){
    return a+b;
    console.log(a+b)
}
//subtract
function subtract(a, b){
    return a-b;
}
//multiply
function multiply(a, b){
    return a*b;
}
//divide
function divide(a, b){
    if (a === 0 || b === 0){
        alert("Cannot divide by Zero!!one!!11!")
    }
    return a/b;
}
//operate
function operate(type, a, b) {

    if (type === "+"){
        return add(a,b)
    }
    else if (type === "-"){
        return subtract(a, b)
    }
    else if (type === "*"){
        return multiply(a, b)
    }
    else if (type === "/"){
        return divide(a, b)
    }
}
//push button numbers
function pushButtonN(){
    let text = this.textContent;
    currentText += text;
    console.log(currentText)
    updateDisplay();
}
//update display function
function updateDisplay(){
    display.textContent = currentText;
}
//clear button function
function clearButton(){
    currentText = "";
    updateDisplay();
}
//delete button function
function deleteButton(){
    currentText = currentText.slice(0, -1);
    updateDisplay();
}