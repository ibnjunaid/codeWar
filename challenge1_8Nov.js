'use strict';

Math.__proto__.frac =  number => {return number - Math.floor(number)} ;

function findNextSquare(sq) {
  if (Math.frac(Math.sqrt(sq)) != 0)
    return -1;
  else
  {
    return (Math.sqrt(sq)+1)**2;
  }
}

let squares = process.argv.slice(2);

//squares.forEach((squared)=>{console.log(`Square: ${squared}  Squared+1: ${findNextSquare(squared)}`)});

//Refactored v1

let nextSqRefactored = sq => {return Math.frac(Math.sqrt(sq))? -1: (Math.sqrt(sq)+1)**2 };

//console.log(nextSqRefactored(2));
//console.log(nextSqRefactored(4));

squares.forEach((squared)=>{ ! isNaN(squared)?console.log(nextSqRefactored(squared)):console.log("Try putting a positive Number")});
