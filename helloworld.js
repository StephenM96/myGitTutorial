const Sentiment = require("sentiment")

const sentimentPackage = new Sentiment();

const result = sentimentPackage.analyze("Cats are very cool.");

console.log(result); //Score: -2, Comparative: -0.666

function SayHello(variable, variable_2){
    console.log(variable, variable_2)
}

SayHello("Hack the Planet", "Hello World")

function SUM(A, B){
    return A + B
}

console.log(SUM(2,2))

function MULT(A, B){
    return A * B
}

console.log(MULT(3,4))

function SUB(A, B){
    return A - B
}

console.log(SUB(3,4))

function DIV(A, B){
    return A / B
}

console.log(DIV(3,4))

function Stephen(variable_3, variable_4){
    console.log("Hello", variable_4, "-", variable_3)
}

Stephen("Stephen", "Moss")

function isCool(name){
    if(name === 'Stephen'){
      return true
    } else {
      return false
    }
  }
  
  function checkCoolness(name){
    const cool = isCool(name) // true
    if (cool === true){
      console.log(name, 'is cool!')
    } else { //false
      console.log(name, 'is not cool.')
    }
  }
  
  checkCoolness('Stephen')