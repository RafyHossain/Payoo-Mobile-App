

//Add Money
const setPin=3921;
//function to get input values
function getInputValueNumber(id){
    const inputfeild=document.getElementById(id);
    const inputFieldValue=inputfeild.value;
    const inputFieldValueNumber=parseInt(inputFieldValue);
    return inputFieldValueNumber;
}

function getInputValue (id){
    const inputfeild=document.getElementById(id);
    const inputFieldValue=inputfeild.value;
    return inputFieldValue;
}

function getInnerText(id){
    const element=document.getElementById(id);
    const elementValue=element.innerText;
    const elementValueNumber=parseInt(elementValue);
    return elementValueNumber;
}

function toSetInnerText(value){
    const availableBalanceElement=document.getElementById("available-balance");
    availableBalanceElement.innerText=value;
}

document.getElementById("add-btn").addEventListener("click", function(e){
    e.preventDefault()
    
   //const bankName=document.getElementById("bank").value;
   const bankName=getInputValue("bank");
   const acNo=document.getElementById("ac-no").value;
   //const amountAdd=parseInt(document.getElementById("amount-add").value);
   const amountAdd=getInputValueNumber("amount-add");
   //const pinNo=parseInt(document.getElementById("pin-no").value);
   const pinNo=getInputValueNumber("pin-no");
   const acName=document.getElementById("ac-name").value;
   //const availableBalance=parseInt(document.getElementById("available-balance").innerText);
   const availableBalance=getInnerText("available-balance");

   if(acNo.length!==11 )
   {
    alert("Hey "+acName+" Please provide your valid 11 digit Account Number");
    return;
   }
   if(pinNo!==setPin)
   {
    alert("Enter Valid 4 digit pin");
    return;
   }
   
    const newTotalBalance=availableBalance+amountAdd;

  // document.getElementById("available-balance").innerText=newTotalBalance;
  toSetInnerText(newTotalBalance);

   
})


//Cash Out
document.getElementById("out-btn").addEventListener("click", function(e){
    e.preventDefault();
    //const withdrawAmount=parseInt(document.getElementById("withdraw-amount").value);
    const withdrawAmount=getInputValueNumber("withdraw-amount");

    const availableBalance=parseInt(document.getElementById("available-balance").innerText);

    const newTotalBalance=availableBalance-withdrawAmount;

  // document.getElementById("available-balance").innerText=newTotalBalance;
  toSetInnerText(newTotalBalance);
})

//Transfer Money


//toggline function

function handleToggle(id){
   const forms=document.getElementsByClassName("form");
    for(const form of forms){
        form.style.display="none"
    }
    document.getElementById(id).style.display="block"
     

}

document.getElementById("add-money-btn").addEventListener("click", function(){
   handleToggle("add-money")
    
  
})



document.getElementById("cash-out-btn").addEventListener("click", function(){
     handleToggle("cash-out")
    

})

document.getElementById("transfer-money-btn").addEventListener("click", function(){
     handleToggle("transfer-money")
     
   
})