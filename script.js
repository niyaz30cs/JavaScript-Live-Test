const num1Input=document.getElementById("num1");
const num2Input=document.getElementById("num2");
const addbtn=document.getElementById("adda");
const subbtn=document.getElementById("sub");
const mulbtn=document.getElementById("mul");
const divbtn=document.getElementById("divi");
const data=document.getElementById("result");

addbtn.addEventListener("click",addition)
subbtn.addEventListener("click",substraction);
mulbtn.addEventListener("click",multiplication);
divbtn.addEventListener("click",division);


function addition(){
    // console.log(result);
    const number1=Number(num1Input.value);
    const number2=Number(num2Input.value);
    const result=number1+number2;
    displayResult(result);
}
function substraction(){
    const number1=Number(num1Input.value);
    const number2=Number(num2Input.value);
    const result=number1-number2;
    displayResult(result);
}
function multiplication(){
    const number1=Number(num1Input.value);
    const number2=Number(num2Input.value);
    const result=number1*number2;
    displayResult(result);
}
function division(){
    const number1=Number(num1Input.value);
    const number2=Number(num2Input.value);
    const result=number1/number2;
    displayResult(result);
}

function displayResult(result){
    // data.innerHTML=result;
    data.innerHTML=`Result:-${result}`;
}