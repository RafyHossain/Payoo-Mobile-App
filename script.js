// login button functionality
document.getElementById("loginButton").addEventListener("click",function (e){
    e.preventDefault()
    const mobileNumber = 1784038430
    const pin = 3921
    
    const mobileNumberValue = document.getElementById
    ("mobile-number").value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)


    const pinNumberValue = document.getElementById("pin-number").value

    const pinNumberValueConverted = parseInt(pinNumberValue)

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted===pin){
        window.location.href="./home.html"
    }

    else{
        alert("Invalid Number or Pin!")
    }
})