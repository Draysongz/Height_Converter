//selecting all DOM elements
var userInput = document.querySelector('#userInput')
var inputUnit = document.querySelector('#inputUnit')
var outputUnit = document.querySelector('#OutputUnit')
var result = document.querySelector('#result')
var convertBtn = document.querySelector('#convertbtn')

if (userInput.value === '') {
    convertBtn.disabled=true;
} 
if(inputUnit.value === outputUnit.value){
    convertBtn.disabled=true;
}
//adding an eventlistener to perfrom some functions
userInput.addEventListener('input', ()=>{
    if (userInput.value === '') {
        convertBtn.disabled=true;
    } else{
        convertBtn.disabled=false;
    }
})
convertBtn.addEventListener('click', convert)

function convert() {
    
    if (inputUnit.value === 'm' && outputUnit.value === 'ft') {
        console.log('work');
        let finalresult = parseInt((userInput.value * 3.281));
        result.value = finalresult
    }else if(inputUnit.value === 'ft' && outputUnit.value === 'm'){
        let finalresult = parseInt(userInput.value /3.281)
        result.value = finalresult




    }  //  feet conversion
     else if (inputUnit.value === "ft" && outputUnit.value === "inches") {
  let finalResult;
  finalResult = Math.round(userInput.value * 12);
  result.value = finalResult;
} else if (inputUnit.value === "inches" && outputUnit.value === "ft") {
  let finalResult;
  finalResult = Math.round(userInput.value / 12);
  result.value = finalResult;



 //  cm conversion
} else if (inputUnit.value === "ft" && outputUnit.value === "cm") {
  let finalResult;
  finalResult = Math.round(userInput.value / 0.032808);
  result.value = finalResult;
} else if (inputUnit.value === "cm" && outputUnit.value === "ft") {
  let finalResult;
  finalResult = Math.round(userInput.value * 0.032808);
  result.value = finalResult;


  //inches conversion
} else if (inputUnit.value === "m" && outputUnit.value === "inches") {
  let finalResult;
  finalResult = Math.round(userInput.value * 39.3701);
  result.value = finalResult;
} else if (inputUnit.value === "inches" && outputUnit.value === "m") {
  let finalResult;
  finalResult = Math.round(userInputm m m . 
    .value / 39.3701);
  result.value = finalResult;

  //cm conversion
} else if (inputUnit.value === "m" && outputUnit.value === "cm") {
  let finalResult;
  finalResult = Math.round(userInput.value * 100);
  result.value = finalResult;
} else if (inputUnit.value === "cm" && outputUnit.value === "m") {
  let finalResult;
  finalResult = Math.round(userInput.value / 100);
  result.value = finalResult;
  //
}


}
