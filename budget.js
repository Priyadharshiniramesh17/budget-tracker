let amount = document.getElementById("budget")
let product = document.getElementById("product")
let cost = document.getElementById("cost")
let amt = document.getElementById("amount")
let exntr = document.getElementById("expenditure")
let balance = document.getElementById("balance")
let list = document.getElementById("list")
let tempamt = 0
let expenseID = 0
let expenses = {}

//setbudget
function setBudget(){

    // string to float number
    tempamt = parseFloat(amount.value)
    let setamt = amount.value.trim()
    
    //Enter the empty or 0
    if((setamt === '') || tempamt <= 0){
        alert("Please enter a valid amount :(")
        return
    }

    //budget can be display in amount
    amt.innerText = tempamt

    //calculate the balance
    balance.innerHTML = tempamt - parseFloat(exntr.innerHTML)

    //clear the input field
    amount.value = ""
}

function addExpense(){
    let prod = product.value.trim()
    let cst = cost.value.trim()
    let cstval = parseFloat(cost.value)

    //valid expense details
    if(!prod || cst === '' || cstval <= 0){
        alert("Please Enter valid expense details :(")
        return
    }
    
    //update expenditure and balance
    let tolexp = parseFloat(exntr.innerText) + cstval
    exntr.innerText = tolexp
    balance.innerText = tempamt - tolexp

    //create new expense item
    expenseID++
    expenses[expenseID] = cstval

    let listitm = `<div class="expense-item" id="expense-${expenseID}">
                    <span>${prod}</span>
                    <span>${cstval}</span>
                    <button class="remove-button" onclick="removeItem(${expenseID})">
                    <img src="https://img.icons8.com/?size=100&id=KPhFC2OwpbWV&format=png&color=000000" alt="Remove"></button></div>`

    list.innerHTML += listitm

    //clear the input 
    product.value = ''
    cost.value = ''
}

function removeItem(id){
    let item = document.getElementById(`expense-${id}`)
    let cost = expenses[id]

    // Update the expenditure and balance
    let currentExpenditure = parseFloat(exntr.innerText)
    exntr.innerText = currentExpenditure - cost
    balance.innerText = tempamt - parseFloat(exntr.innerText)

    // Remove the item from the list
    item.remove()

    // Remove the item from the expenses object
    delete expenses[id]
}