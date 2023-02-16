function getInputValue(inputId) {
        const inputElement = document.getElementById(inputId).value;
        const inputNum = parseInt(inputElement);
        return inputNum;
    
}

function getInnerTextById(elementId) {
    const textElement = document.getElementById(elementId);
    const innrText = parseInt(textElement.innerText);
    return innrText;
}

function setInnerText(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

// calculate btn event
document.getElementById('calculateBtn').addEventListener('click', function () {
    const income = getInputValue("income");
    // Expense
    const food = getInputValue("food");
    const rent = getInputValue("rent");
    const others = getInputValue("others");
    // total expence
    const totalExpense = food + rent + others;
    // set expence
    setInnerText('total-expence', totalExpense);

    // get balence 
    const balence = income - totalExpense;
    setInnerText('blance', balence);
})

// savving btn
document.getElementById('savingbtn').addEventListener('click', function(){
    const balance = getInnerTextById("blance");

    const savingInput = getInputValue("saving-input");
    const convertParsent = savingInput / 100;
    const savingAmount = balance * convertParsent;
    // set saving amount
    setInnerText("savingAmount", savingAmount);
    // Remaining Balance
    const remainigBlance = balance - savingAmount;
    setInnerText('remainigAmount', remainigBlance);

})