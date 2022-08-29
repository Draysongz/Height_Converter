//selecting all DOM elements
var userInput = document.querySelector('#userInput')
var inputUnit = document.querySelector('#inputUnit')
var outputUnit = document.querySelector('#OutputUnit')
var result = document.querySelector('#result')
var convertBtn = document.querySelector('#convertbtn')

if (userInput.value === '') {
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
        

    }
}
