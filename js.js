function add(a, b){
    return a+b;
    console.log(a+b)
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    if (a === 0 || b === 0){
        alert("Cannot divide by Zero!!one!!11!")
    }
    return a/b;
}

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

