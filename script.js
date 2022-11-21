const obj = [
    { name: 'factory', cost: 10, income: 1 },
    { name: 'market', cost: 15, income: 2 },
]
const { log } = console
const tickInterval = 1000
let balance = 100
let income = 1
log(balance)

function tick() {
    balance += income
    log(balance)
    setTimeout(tick, 1000)
}
tick()

function addIncome(arr, _name) {
    const newBuilding = arr.find(nam => nam.name === _name)
    if (newBuilding.cost <= balance) {
        balance -= newBuilding.cost
        income += newBuilding.income
        log(income, balance)
    } else log('Not enought founds')
}