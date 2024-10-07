// Rewrite the following function as an arrow function:
/******************************/
// Task 1 
	const  greet = (name)=>`Hello, ${name}!`;
	

console.log(greet("Hamad"));


// Write a simple arrow function that takes two parameters and returns their sum.
// Task 2
 const Sum = (firstNum,secondNum) => firstNum + secondNum;
console.log(Sum(2 , 8));

// Write a simple arrow function that squares a number.
// Task 3
const Square = (num) => num * num;
console.log(Square(5));


// [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.
const arr = [2,5,4,7,8,6,9,8,4];
//const arr2= arr.map;
const arraySquared =(arr)=> {
    
    return arr.map(Square)
} 



console.log(arraySquared(arr));






   /* const greet(name) =>{
        return `Hello, ${name}!`;
    }
/********************************/
/*
const performMath = (operation, firstNum, secondNum) => {
    return operation(firstNum, secondNum);
  };
  
  const addition = (firstNum, secondNum) => {
    return firstNum + secondNum;
  };
  
  const subtraction = (firstNum, secondNum) => {
    return firstNum - secondNum;
  };
  
  const multiplication = (firstNum, secondNum) => {
    return firstNum * secondNum;
  };
  
  console.log(performMath((a, b) => {return a / b;},15,3));*/