let emp = {
    'eid': 101,
    'ename': 'Rahul',
    'gender': 'Male'
}

console.log(emp.eid)
console.log(emp.ename)
console.log(emp.gender)
console.log(emp.loc) // undefined
console.log(emp)

let employees = [
    { eid: 101, ename: 'rg', 'gender': 'm' },
    { eid: 102, ename: 'sg', 'gender': 'f' },
    { eid: 103, ename: 'pg', 'gender': 'f' }
]

for (let emp of employees) {
    console.log(emp.ename)
}

for (let emp of employees) {
    console.log(emp.email)
}


for (let emp of employees) {
    console.log(emp.eid)
}

