const array = [50,24,21, 18, 5];
// ===>        0,  1, 2, 3,  4

// LOOPING

// for
// while
// do while

// for-loop ===> for(initialisasi variable; breakpoint; increment/decrement)
// for(let i = 0; i < 5; i++) {
//     console.log(i)
// }




// NESTED LOOP
const number = 5;

for(let i = 0; i < number; i++) {
    // i = 1
    let result = ""
    
    for(let j = 0; j <= i; j++) {
        // j = 0 && j <= 1
        // j = 1 && j <= 1
        // **
       result += "*"
    }

    
}

for(let i = number; i > 0; i--) {
    // i = 3
    let result = ""

    for(let j = 0; j < i; j++) {
        // j = 0 ==> 1 ==> 2
        result += "*"
    }
}

//  *****  i = 0
//  *****  i = 1
//  *****  i = 2
//  *****  i = 3
//  *****  i = 4
//j 01234     

for(let i = 0; i < number; i++) {

    let result = ""

    for(let j = 0; j < number; j++) {
        
        if(i === 0 || i === 4 || j === 0 || j === 4) {
            result += "*"
        } else {
            result += " "
        }
    }

}

// while(conditional)


let healthBar = 100;
let damage = 20

while(healthBar > 0) {
   healthBar -= 20;
} 


// COUNTER = 10


// FUNCTION

// JAVASCRIPT ES5

//                                   PARAMATERS
// function simpleCalc(firstNum, secondNum, operator) {

//     let result = 0;
    
//     if(operator == "+") {
//         result = firstNum + secondNum
//     } else if(operator == "-") {
//         result = firstNum - secondNum
//     } else if(operator == "*") {
//         result = firstNum * secondNum
//     } else if(operator == "/") {
//         result = firstNum / secondNum
//     }

//     return result;
// }

// CALL A FUNCTION

//                     ARGUMENTS


// JAVASCRIPT FUNCTION ES6 => ARROW FUNCTION
const simpleCalc = (firstNum, secondNum, operator) => {
    let result = 0;

    if(operator == "+") {
        result = firstNum + secondNum
    } else if(operator == "-") {
        result = firstNum - secondNum
    } else if(operator == "*") {
        result = firstNum * secondNum
    } else if(operator == "/") {
        result = firstNum / secondNum
    }

    return result;
}

// Math random


// 1 -> 5
let arrayRandom = []

for(let i = 0; i < 20; i++) {
    const random = Math.floor(Math.random() * 5) + 1;
    arrayRandom.push(random)
}

console.log(arrayRandom)
