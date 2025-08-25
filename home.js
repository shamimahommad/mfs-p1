const validPin = 1234;
const transactionData = [];

// function to get input values 
function getInputValueNumber(id) {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    inputFieldValueNumber = parseInt(inputFieldValue);
    return inputFieldValueNumber;
}

// function for only value 
function getInputValue(id) {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    return inputFieldValue;
}

// function for innerText
function getInnerText(id) {
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    const elementValueNumber = parseInt(elementValue);
    return elementValueNumber;
}

// function to set innerText
function setInnerText(value) {
    const availableBalanceElement = document.getElementById('available-balance');
    availableBalanceElement.innerText = value;
}

// function for toggle 
function handleToggle(id) {
    const forms = document.getElementsByClassName('form');
    // sob gula k remove korlam 
    for (const form of forms) {
        form.style.display = 'none';
    }
    // jeta dekhabo sudhu seta display korlam 
    document.getElementById(id).style.display = 'block';
}
// function for toggle button 
function handleButtonToggle(id) {
    const formBtns = document.getElementsByClassName('form-btn');

    for (const btn of formBtns) {
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
        btn.classList.add("border-gray-300");
    }
    document.getElementById(id).classList.remove("border-gray-300");
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}


// add Money feature 
document.getElementById('add-money-btn')
    .addEventListener('click', function (e) {
        e.preventDefault;
        // console.log('add money btn clicked');
        const bank = getInputValue('bank');
        const accountNumber = getInputValue('account-number');
        const amount = getInputValueNumber('add-amount');

        const pin = getInputValueNumber('add-pin');
        if (accountNumber.length < 11) {
            alert('Please Enter Valid Account Number')
            return;
        }

        if (pin !== validPin) {
            alert('Please Enter Valid Pin Number');
            return;
        }

        const availableBalance = getInnerText('available-balance');
        const newBalance = amount + availableBalance;

        // console.log(newBalance);
        setInnerText(newBalance);

        // Transaction history
        const data = {
            name: "Add Money",
            date: new Date().toLocaleString()
        }
        transactionData.push(data);
    })

// Cash Out Money Feature
document.getElementById('withdraw-btn')
    .addEventListener('click', function (e) {
        const amount = getInputValueNumber('withdraw-amount');
        const availableBalance = getInnerText('available-balance');
        // console.log(amount, availableBalance);
        if (amount > availableBalance) {
            alert("You Don't Have Enough Balance");
            return;
        }
        const newBalance = availableBalance - amount;
        setInnerText(newBalance);

        // Transaction history
        const data = {
            name: "Cash Out",
            date: new Date().toLocaleString()
        }
        transactionData.push(data);
    })

document.getElementById("transaction-btn")
    .addEventListener("click", function () {
        const transactionContainer = document.getElementById("transaction-container");
        transactionContainer.innerText="";

        for (const data of transactionData) {
            const div = document.createElement("div");
            div.innerHTML = `
                <div class="flex justify-between items-center bg-white rounded-xl mt-3 p-3">
                    <div class="flex items-center ">
                        <div class="p-3 rounded-full bg-[#f4f5f7]">
                            <img src="./assets/wallet1.png" alt="">
                        </div>
                        <div class="ml-5">
                            <h1>${data.name}</h1>
                            <p>${data.date}</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            `
            transactionContainer.appendChild(div);
        }
    })





// Toggling feature 

//add money
document.getElementById('add-btn')
    .addEventListener('click', function () {
        handleToggle('addmoney-parent')
        handleButtonToggle('add-btn')
    })

//cash out
document.getElementById('cashout-btn')
    .addEventListener('click', function () {
        handleToggle('cashout-parent');
        handleButtonToggle('cashout-btn');
    })
//transfer Money
document.getElementById('transfer-btn')
    .addEventListener('click', function () {
        handleToggle('transfer-parent');
        handleButtonToggle('transfer-btn');
    })

//Get Bonus
document.getElementById('get-bonus-btn')
    .addEventListener('click', function () {
        handleToggle('get-bonus-parent');
        handleButtonToggle('get-bonus-btn');
    })
//Pay Bill 
document.getElementById('paybill-btn')
    .addEventListener('click', function () {
        handleToggle('paybill-parent');
        handleButtonToggle('paybill-btn');
    })

// Transactions 
document.getElementById('transaction-btn')
    .addEventListener('click', function () {
        handleToggle('transaction-parent');
        handleButtonToggle('transaction-btn');
    })