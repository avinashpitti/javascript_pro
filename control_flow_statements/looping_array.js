let enames = ['rg', 'sg', 'pg', 'modi']

// console.log(enames.length)

// method 1
for (let i = 0; i <= 3; i++) {
    console.log(enames[i]);
}

// method 2
for (let ename of enames) {
    console.log(ename)
}

let eids = [101, 102, 103, 104, 105, 106, 107]
for (let eid of eids) {
    console.log(eid)
}