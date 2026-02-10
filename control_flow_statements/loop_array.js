let numbers = [11, 7, 8, 245, 124]

// print all array elements
console.log(numbers)

// print only even numbers
// method 1
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i])
    }
}

// method 2
for (let num of numbers) {
    if (num % 2 === 0) {
        console.log(num)
    }
}

// method 3
let evenNumbers = numbers.filter(num => num % 2 === 0)

console.log(evenNumbers)

// print sum of all array
// using for loop
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);

// using for of
let sums = 0;

for (let num of numbers) {
    sums += num;
}

console.log(sums);

// using reduce(modern and used in react)
let addi = numbers.reduce((acc, current) => acc + current, 0);

console.log(addi);




