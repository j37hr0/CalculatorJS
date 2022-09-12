let buttons = document.querySelectorAll(".numberClass")
const display = document.getElementById("current-display");
const functions = document.getElementsByClassName("functions")
let currentText = "";
var func;
var valueA;
var valueB;
var result;
console.log(functions)

//add event listeners on click for number buttons
for (button of buttons) {
    button.addEventListener('click', pushButtonN)}
//add event listeners on click for function buttons
for (func of functions){
    func.addEventListener('click', getOperation)
}

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
    else if (type === "x"){
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
    valueA = "";
    valueB = "";
    result = "";
    updateDisplay();
}
//delete button function
function deleteButton(){
    currentText = currentText.slice(0, -1);
    updateDisplay();
}

function getOperation(){
    text = this.textContent;
    console.log(this.textContent);
    valueA = currentText;
    currentText = "";
    func = text;
}

function displayResult(r) {
    currentText = r;
    updateDisplay()
}

function equals(f, a, b) {
    b = Number(currentText);
    a = Number(valueA);
    f = func;
    console.log(a)
    console.log(b)
    console.log(f)
    if (f === "+"){
        let result = add(a,b)
        // console.log(result) 
        displayResult(result)
    }
    else if (f === "-") {
        let result = subtract(a,b) 
        displayResult(result)
    }
    else if (f === "x") {
        let result = multiply(a,b)
        displayResult(result)
    }
    else if (f === "/") {
        let result = divide(a,b)
        displayResult(result)
    }
}