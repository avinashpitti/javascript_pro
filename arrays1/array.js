enames=['rg','sg','pg','nm']
console.log(enames)
console.log(enames.push('am'));
console.log(enames)
console.log(enames.unshift('kcr'))
console.log(enames)
console.log(enames.pop())
console.log(enames)
console.log(enames.shift())
console.log(enames)

console.log(enames.splice(2,1)) // It removes the index value 2
console.log(enames)


let ename=" Rahul  ";
let name1=ename.toLowerCase()
let name2=ename.toUpperCase()
let name3=ename.trim()
let length=ename.trim().length;
console.log(name1)
console.log(name2)
console.log(ename.length)  
console.log(name3)
console.log(length)

// how to verify given array is empty or not in js
let users=[
    {uid:1,uname:'RG'},
    {uid:2,uname:'SG'}
]
if (users.length === 0) {
    console.log("Array is empty");
} else {
    console.log("Array is not empty");
}


// how to verify object is empty or not
let emp={}
let user={
    uid:101,
    uname:'Avi'
}

if (Object.keys(emp).length === 0) {
    console.log("object is empty");
} else {
    console.log("object is not empty");
}

if (Object.keys(user).length===0){
    console.log("obj is empty");
}else{
    console.log("obj is not empty")
}

let keys=Object.keys(user)
let value=Object.values(user)
console.log(keys.length)
console.log(keys.values)


// // how to print object in browser
let eid=101
let empname='Rahul'
let avail=true
let loc=['amethi','wayanad','delhi']
let em={
    eid:102,
    emp:'sonia'
}
// document.writeln(eid)
// document.writeln(eid)
// document.writeln("</br>")
// document.writeln(empname)
// document.writeln("</br>")
// document.writeln(avail)
// document.writeln("</br>")
// document.writeln(loc)
// document.writeln("</br>")
// document.writeln(em)
// document.writeln(JSON.stringify(em ))
