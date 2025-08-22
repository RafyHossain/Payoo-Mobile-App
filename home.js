document.getElementById("add-btn").addEventListener("click", function(e){
    e.preventDefault()
    const setPin=3921;
   const bankName=document.getElementById("bank").value;
   const acNo=document.getElementById("ac-no").value;
   const amountAdd=parseInt(document.getElementById("amount-add").value);
   const pinNo=parseInt(document.getElementById("pin-no").value);
   const acName=document.getElementById("ac-name").value;
   const availableBalance=parseInt(document.getElementById("available-balance").innerText);

   if(acNo.length<11 )
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

   document.getElementById("available-balance").innerText=newTotalBalance;

   
})