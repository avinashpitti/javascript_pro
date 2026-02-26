function greet(ename){
    return 'hello' + ename
}

console.log('rahul')

function greets(){
    console.log(this)
}

greets()

let greeting=()=>{
    console.log(this)
}

greeting()

function wish(){
    console.log('gm')
}
wish()

function wish(){
    console.log('gn')
}
wish()

var wish=()=>{
    console.log('gm')
}
wish()

var wish=()=>{
    console.log('gn')
}
wish()


