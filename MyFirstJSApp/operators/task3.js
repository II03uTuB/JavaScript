console.log("" + 1 + 0); //1, no 10
console.log("" - 1 + 0); //-1, +
console.log(true + false); //true, +
console.log(6 / "3"); //2, +
console.log("2" * "3"); //6, +
console.log(4 + 5 + "px"); //9px, +
console.log("$" + 4 + 5); //$9, no $45
console.log("4" - 2); //2, +
console.log(7 / 0); //Inf, +
console.log("  -9  " + 5); //95, no    -9   5
console.log("  -9  " - 5); //-14, +
console.log(null + 1); //1, +
console.log(undefined + 1); //und, no NaN
console.log(" \t \n" - 2); //-2, +