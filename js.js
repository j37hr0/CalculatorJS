const displayValue = "";
let buttons = document.querySelectorAll(".numberClass")
const display = document.getElementById("current-display");
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
    display.innerHTML = text;
    console.log(text);
    updateDisplay(text);
}

function updateDisplay(v){
    display.textContent = v;
}

