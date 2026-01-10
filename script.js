const buttonEl = document.getElementById("btn");
const inputEl = document.getElementById("input");

const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");

let result = [];

const formula = [
  3.2808399, 0.3048, 0.26417205, 3.78541178, 2.20462262, 0.45359237,
];

buttonEl.addEventListener("click", function () {
  if(result.length ===0){
    convert(inputEl);
    displayResult();
  }else{}
  
});

function convert(input) {
 
    result =[]
    input = input.value;

    for (let i = 0; i < formula.length; i++) {
      let solution = input * formula[i];
      solution = solution.toFixed(3);
      result.push(solution);
    }
    console.log(result);
  
}

function displayResult() {

 
    
    input = inputEl.value;
  lengthEl.innerText += `${input} meters = ${result[0]} feet | ${input} feet = ${result[1]} meters`;

  volumeEl.innerText += `${input} liters = ${result[2]} gallons | ${input} gallons = ${result[3]} liters`;

  massEl.innerText += `${input} kilos =${result[4]} pounds | ${input} pounds = ${result[5]} kilo`;
  
  
}
