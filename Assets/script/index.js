const controlExpense = {
    budget: 0,
    expense: 0,
    balance: 0
}
const expenseList = window.localStorage.getItem('expenseList') || []
const creditList = window.localStorage.getItem('creditList') || []

const inputBudgetOrigin = document.querySelector('.formAddBudgetOrigin')
const inputBudgetValue = document.querySelector('.formAddBudgetValue')
const buttonBudget = document.querySelector('.formAddBudget button')


buttonBudget.addEventListener('click', printValueBudget)

function printValueBudget() {
    const originBudget = inputBudgetOrigin.value
    const valueBudget = Number(inputBudgetValue.value)
    controlExpense.budget += valueBudget
    controlExpense.balance += valueBudget
    window.localStorage.setItem('controlExpense', JSON.stringify(controlExpense))
    updateInterface()
    addBudgetInterface(originBudget, valueBudget)
}

const inputExpenseOrigin = document.querySelector('.formAddExpenseOrigin')
const inputExpenseValue = document.querySelector('.formAddExpenseValue')
const buttonExpense = document.querySelector('.formAddExpense button')

buttonExpense.addEventListener('click', printValueExpense)

function printValueExpense() {
    const originExpense = inputExpenseOrigin.value
    const valueExpense = Number(inputExpenseValue.value)
    controlExpense.expense += valueExpense
    controlExpense.balance -= valueExpense
    window.localStorage.setItem('controlExpense', JSON.stringify(controlExpense))
    updateInterface()
    addExpenseInterface(originExpense, valueExpense)
}

const listBudget = document.querySelector('.containerBudgetList')

function addBudgetInterface(originBudget, valueBudget) {
    const li = document.createElement('li')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    const img = document.createElement('img')

    h3.innerText = originBudget
    p.innerText = `€ ${valueBudget}`
    img.src = "./Assets/img/trash.png"
    img.alt = "trash"

    img.addEventListener('click', removeBudget)
    li.dataset.value = valueBudget
    li.appendChild(h3)
    li.appendChild(p)
    li.appendChild(img)
    listBudget.appendChild(li)
}

function removeBudget(event) {
    const budgetClick = event.target.parentNode
    const valueBudgetClick = Number(budgetClick.dataset.value)
    controlExpense.budget -= valueBudgetClick
    controlExpense.balance += valueBudgetClick
    updateInterface()
    budgetClick.remove()
}
const budget = document.querySelector('.resultsBudget p')
const expense = document.querySelector('.resultsExpense p')
const balance = document.querySelector('.resultsBalance p')

function updateInterface() {
    const localStorageExpense = JSON.parse(window.localStorage.getItem('controlExpense'))
    budget.innerText = `+€ ${localStorageExpense.budget}`
    expense.innerText = `-€ ${localStorageExpense.expense}`
    balance.innerText = `€ ${localStorageExpense.balance}`
}

updateInterface()

const listExpense = document.querySelector('.containerExpenseList')

function addExpenseInterface(originExpense, valueExpense) {
    const li = document.createElement('li')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    const img = document.createElement('img')

    h3.innerText = originExpense
    p.innerText = `€ ${valueExpense}`
    img.src = "./Assets/img/trash.png"
    img.alt = "trash"

    img.addEventListener('click', removeExpense)
    li.dataset.value = valueExpense
    li.appendChild(h3)
    li.appendChild(p)
    li.appendChild(img)
    listExpense.appendChild(li)
}

function removeExpense(event) {
    const expenseClick = event.target.parentNode
    const valueExpenseClick = Number(expenseClick.dataset.value)
    controlExpense.expense -= valueExpenseClick
    controlExpense.balance += valueExpenseClick
    updateInterface()
    expenseClick.remove()
    
}