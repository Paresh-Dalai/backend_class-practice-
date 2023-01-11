

///////////=========>>>>> SYNCHRONOUS FUNCTION <<<<<============//////////

console.log("hello !!! let's create an add function");
function add(a,b) {
    return a+b;
}
console.log(add(3,4));
console.log("you got the sum")

///////////=========>>>>> ASYNCHRONOUS FUNCTION <<<<<============//////////

// Call-back

function greetings(cb) {
    console.log("hello !!!!")
    cb()
}

function welcome() {
    console.log("welcome")
}
greetings(welcome)


//Call-back with Asynchronous Function

console.log("hello dear")

function greetings(){
    console.log("welcome")
}
setTimeout(()=>{
    greetings()
},3000)

// Timers (setTimeout,clearTimeout,setInterval,clearInterval)

// setTimeout,clearTimeout

function Burger () {
    console.log("Take Your Burger")
}
let int = setTimeout(()=>{
    Burger()
},4000)

clearTimeout(int)

// setInterval,clearInterval

function Burger () {

    let bg =  setInterval(() => {
        console.log("Your Food is On the way")
    },2000)

  setTimeout(() => {
    clearInterval(bg)
    console.log("Your Food is ready")
},10000)
}

Burger()