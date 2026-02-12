function wish(a,b){
    // alert(a+b)
    // console.log(a+b)
    document.writeln(a+b)
}


function login(name,password){
    if (name==='Rahul' && password===123){
        return true
    }
    return false;
}

let status1=login('Rahul',123)
console.log(status1)

let status2=login("rahul",123)// small r
console.log(status2)


function add(a,b){
    return a+b;
}
let r1=add(10,20)
let r2=add(17)
console.log(r1)
console.log(r2)
