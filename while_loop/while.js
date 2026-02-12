// using for loop
for (let m = 11; m <= 15; m++) {
    console.log(m)
}

// // using while loop
// let i = 1;
// while (i <= 5) {
//     console.log(i)
//     i++;
// }


// using do while loop
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5)

// wap to print first 10 even numbers using while loop
let odd = 1;
while (odd < 20) {
    console.log(odd)
    odd += 2;
}

//
let employees = [
    { eid: 101, ename: 'Rahul', gender: 'M' },
    { eid: 102, ename: 'virat', gender: 'M' },
    { eid: 103, ename: 'Rohit', gender: 'M' }
]

let v = 0;
while (v <= employees.length - 1) {
    console.log(employees[v].ename);
    v++;
}

for (let s=1;s<=10;s++){
    if (s==6)
        continue
    console.log(s)
}

let i = 11;

while (i <= 20) {
    if (i != 15) {
        console.log(i);
    }
    i++;
}


// let i = 11;

// while (i <= 20) {
//     if (i == 15) {
//         i++;       // increment first
//         continue;
//     }

//     console.log(i);
//     i++;
// }

