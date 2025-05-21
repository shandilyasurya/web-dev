// variables
//var a=12;
//let b=13;
//a = 22;
//b 32;
 

// primitive and refrences
//[].{}.() - reference 
//other primitive 

//var a = 12;

//var = c;//this is right we can copy primitive values 

//var b = [1,2,3];
 //var d = b;//this is wrong because it will not give you the reference value 
//var d = [...b]; //this creates the right copy for you as when we pop elements from this tere is no change in b

//operators 
//+,-,*,/,%q
//&& AND || OR
//0 false undifined NaN null "" document.all - falsy


//loops 
// for forin foreach while do-while forof 
//for(starting; ending; change){}
//example
//for(var i = 0; i<12 ; i++){
//    console.log(i); 
//}


//var arr = [1,2,3,4];

//arr.forEach(function(value){
  //  console.log(value + 2);
//})

//var obj = {name: "suryansh", age: 18}
//for (var value in obj){
//    console.log(obj);
//}


//ternary operator
//12>13? "hello":"hey"

//function abcd(){
  //fuction sgtatements 
//}

//fuction(){
  //anonamus function 
//}

//()=>{
  //fat arrow function 
//}

//a=>{
  //fat arrow function with one parameter  
//}

//()=>12; 

// Function to generate multiplication table
function generateMultiplicationTable(number) {
    let tableHTML = `<div class="table-card">
        <h3>Table of ${number}</h3>`;
    
    for (let i = 1; i <= 10; i++) {
        tableHTML += `<div>${number} × ${i} = ${number * i}</div>`;
    }
    
    tableHTML += '</div>';
    return tableHTML;
}

// Function to generate squares and cubes
function generateNumberPower(number, power) {
    return `<div class="number-item">${number}${power === 2 ? '²' : '³'} = ${Math.pow(number, power)}</div>`;
}

// Generate multiplication tables
const tablesContainer = document.getElementById('multiplicationTables');
let tablesHTML = '';
for (let i = 2; i <= 20; i++) {
    tablesHTML += generateMultiplicationTable(i);
}
tablesContainer.innerHTML = tablesHTML;

// Generate squares
const squaresContainer = document.getElementById('squares');
let squaresHTML = '';
for (let i = 1; i <= 100; i++) {
    squaresHTML += generateNumberPower(i, 2);
}
squaresContainer.innerHTML = squaresHTML;

// Generate cubes
const cubesContainer = document.getElementById('cubes');
let cubesHTML = '';
for (let i = 1; i <= 100; i++) {
    cubesHTML += generateNumberPower(i, 3);
}
cubesContainer.innerHTML = cubesHTML; 