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