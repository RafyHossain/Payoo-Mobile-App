//Login funtionality

document.getElementById("login-button").addEventListener("click", function(e){
    e.preventDefault()
    const mobileNumber=1784038430;
    const pinNumber=3921;
    const mobileNumberVatue=document.getElementById("mobile-number").value;
    const mobileConverted=parseInt(mobileNumberVatue);
    const pinVatue=document.getElementById("pin-number").value;
    const pinConverted=parseInt(pinVatue);

    if(mobileConverted===mobileNumber && pinConverted===pinNumber){
        window.location.href="./home.html"

    }
    else
    {
        alert("Invalid Mobile or Pin");
    }
})