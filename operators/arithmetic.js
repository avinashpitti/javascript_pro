let a = true;
let b = false;
let c = 10;
let d = 3.5;
let e = '30'
let f = 'rahul'
let g;

console.log(a + b)
console.log(c * e)
console.log(c * f)
console.log(g)
console.log(a + g)
console.log(e + g)
console.log(c * d)
console.log(b * f)

console.log('***********************')

let num1 = 12
let num2 = 67
let num3 = '19'
console.log(num1 + num2) // 79
console.log(num1 + num2 + num3) // 7919
// mixed values js evaluates left to right
console.log(num3 + num1 + num2) // 191267

console.log('*************Boolean values**************')
console.log(true + true)
console.log(true + false)
console.log(false + false)

console.log('true' + true)
console.log(true + false + 'false')

console.log('null becomes 0')
console.log(null + 5)
console.log(null * 5)
console.log(null / 5)
console.log(5 / null)

console.log('undefined converts to NaN')
console.log(undefined + 5)

console.log('unary + converts values into numbers')
console.log(+'14')//14
console.log(+'16.5')//16.5

console.log('very very important ')
console.log(1 + '2')//12
console.log(1 + +'2')//3

