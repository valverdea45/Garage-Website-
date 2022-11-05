// project code
function callBackFunction(){
    const sayHi = console.log(`Hello! I am a callback function! Since the main function was invoked I got invoked as well!`)
    return sayHi
}

function mainFunction(callBackFunction){
    console.log(`Hello! I am the main function and I just got invoked!`)
    callBackFunction()
}

mainFunction(callBackFunction)

const greetings = ["Hello!", "Hi!", "Howdy!", "Hey buddy!"]


function sayHI(collectionOfGreetings){
    for(const greeting of collectionOfGreetings){
        console.log(`${greeting}, What a wonderful day to code!`)
    }
}
sayHI(greetings)
const hi = `hello!`
console.log(`${hi} world!!!`)


const collectionOfNumbers = [2,4,6,8]

function multiplyArrayByTwo(array){
    const newArray = array.map((e) => {
        return e * 2
    })
    console.log(newArray)
}

multiplyArrayByTwo(collectionOfNumbers)
