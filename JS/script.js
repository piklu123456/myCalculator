let firstNumberElement = document.getElementById('fNum');
let lastNumberElement = document.getElementById('lNum');
let resultElement = document.getElementById('result');

let addButton = document.getElementById('add');
let substractButton = document.getElementById('sub');
let multiplicationButton = document.getElementById('mul');
let divisionButton = document.getElementById('div');
let modulusButton = document.getElementById('mod');

addButton.addEventListener('click', (event) => {
    let fNum = firstNumberElement.value;
    let lNum = lastNumberElement.value;
    if ((isNaN(fNum) == true) || (isNaN(lNum)) || fNum == "" || lNum == "") {
        alert("Please Enter valid Number");
    } else {
        fNum = Number.parseInt(fNum);
        lNum = Number.parseInt(lNum);

        result = fNum + lNum;
        resultElement.value = result;
    }

})

substractButton.addEventListener('click', (event) => {
    let fNum = firstNumberElement.value;
    let lNum = lastNumberElement.value;
    if ((isNaN(fNum) == true) || (isNaN(lNum)) || fNum == "" || lNum == "") {
        alert("Please Enter valid Number");
    } else {
        fNum = Number.parseInt(fNum);
        lNum = Number.parseInt(lNum);

        result = fNum - lNum;
        resultElement.value = result;
    }

})

multiplicationButton.addEventListener('click', (event) => {
    let fNum = firstNumberElement.value;
    let lNum = lastNumberElement.value;
    if ((isNaN(fNum) == true) || (isNaN(lNum)) || fNum == "" || lNum == "") {
        alert("Please Enter valid Number");
    } else {
        fNum = Number.parseInt(fNum);
        lNum = Number.parseInt(lNum);

        result = fNum * lNum;
        resultElement.value = result;
    }

})

divisionButton.addEventListener('click', (event) => {
    let fNum = firstNumberElement.value;
    let lNum = lastNumberElement.value;
    if ((isNaN(fNum) == true) || (isNaN(lNum)) || fNum == "" || lNum == "") {
        alert("Please Enter valid Number");
    } else {
        fNum = Number.parseInt(fNum);
        lNum = Number.parseInt(lNum);

        result = fNum / lNum;
        resultElement.value = result;
    }

})

modulusButton.addEventListener('click', (event) => {
    let fNum = firstNumberElement.value;
    let lNum = lastNumberElement.value;
    if ((isNaN(fNum) == true) || (isNaN(lNum)) || fNum == "" || lNum == "") {
        alert("Please Enter valid Number");
    } else {
        fNum = Number.parseInt(fNum);
        lNum = Number.parseInt(lNum);

        result = fNum % lNum;
        resultElement.value = result;
    }

})
