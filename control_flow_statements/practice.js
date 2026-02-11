
let person = {
    'eid': 101,
    'ename': 'prabhas',
    'esal': 9999,
    'gender': 'Male'
}

// console.log(person)
// console.log(person.ename)
// console.log(person.eid)
// console.log(person.gender)

let emps = [
    { eid: 11, ename: 'praba', 'gender': 'Male' },
    { eid: 12, ename: 'avi', 'gender': 'Male' },
    { eid: 13, ename: 'harsha', 'gender': 'Male' }

]

for (let emp of emps) {
    console.log(emp.ename)
}

// print even numbers
let nums = [2, 5, 78, 34, 212, 45]

for (let num of nums) {
    if (num % 2 === 0) (
        console.log(num)
    )
}







