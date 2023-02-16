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
    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(others)){
        const warning = alert('please input number type value');
        return warning;
    }else if (income <= 0 || food <= 0 || rent <= 0 || others <= 0) {
        const warning = alert('please input positive number');
        return warning;
    }
    // total expence
    const totalExpense = food + rent + others;
    if (income < totalExpense) {
        const warning = alert('your expence is getarthan your income');
        return warning;
    }
    // set expence
    setInnerText('total-expence', totalExpense);

    // get balence 
    const balence = income - totalExpense;
    setInnerText('blance', balence);
})

// savving btn
document.getElementById('savingbtn').addEventListener('click', function () {
    const balance = getInnerTextById("blance");

    const savingInput = getInputValue("saving-input");
    // valitation 
    if (isNaN(savingInput)) {
        const warning = alert('please input number type value');
        return warning;       
    }else if (savingInput <= 0 ) {
        const warning = alert('please input positive number');
        return warning;
    }
    const convertParsent = savingInput / 100;
    const savingAmount = balance * convertParsent;
     // valitation 
    if (balance < savingAmount) {
        const warning = alert('your saving amout geter than your balance');
        return warning;
    }
    // set saving amount
    setInnerText("savingAmount", savingAmount);
    // Remaining Balance
    const remainigBlance = balance - savingAmount;
    setInnerText('remainigAmount', remainigBlance);

})