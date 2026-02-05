// Group of elements/objects/values as entity is called array
// allowed duplicates and heterogeneous
// elements are stored based on indexing,negative indexing is not allowed
// It is iterable with for,while,do-while,for-of

// Group of mapped(key:value)values is called as an object
// duplicates keys are not allowed but values are allowed
// Indexing concept not allowed
//It is not iterable but we can iterate with special iterable object for-in
let enames = ['rahul', 'sonia', 'priyaka', 'modi']

console.log(enames)

console.log(enames[2])
console.log(enames[12])
console.log(enames.length)

let emp = {
    'eid': 101,
    'ename': 'avinash',
    'esal': 45000,
    'gender': 'Male'
}

console.log(emp)
console.log(emp['esal'])
console.log(emp['ename'])
console.log(emp['eid'])



