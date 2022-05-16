let buttonOne = 1;
let FirstName ="Unregistered";
let LastName = "Unregistered";
let Mobile = "Unregistered";
let Email = "Unregistered";
let CurrentValue5 = "No Password"
let CurrentValue6 = "No Password Confirmed"


function testOne() {
    if (buttonOne == 1) {
 document.getElementById("banner").id="bannerMod";
 buttonOne = 2;
    } else if (buttonOne == 2) {
document.getElementById("bannerMod").id="banner"
buttonOne = 1;
    }
    console.log("we have changed the value of the banner");
}

 function register() {
 FirstName=document.getElementById("loginFirst").value;
 LastName=document.getElementById("loginLast").value;
 Mobile=document.getElementById("loginMobile").value;
 Email=document.getElementById("loginEmail").value;
 Consent=document.getElementById("consentCheck").value;

if (Consent=="false") {
    alert("you Forgot to click consent");
}

if (FirstName=="") {
    console.log("Your first name is unregistered");
} else {
    console.log("Your first name is " + FirstName);
}


if (LastName=="") {
    console.log("Your last name is unregistered");
} else {
    console.log("Your last name is " + LastName);
}


if (Mobile=="") {
    console.log("Your Mobile is unregistered");
} else {
    console.log("Your Mobile is " + Mobile);
}

if (Mobile=="") {
    console.log("Your Email is unregistered");
} else {
    console.log("Your Email is " + Email);
}

}

function login() {

    console.log('THIS IS THE PRELIMINARY LOGIN CHECK');
    if (FirstName=="") {
        console.log("Your first name is unregistered");
    } else {
        console.log("Your first name is " + FirstName);
    }
    
    
    if (LastName=="") {
        console.log("Your last name is unregistered");
    } else {
        console.log("Your last name is " + LastName);
    }
    
    
    if (Mobile=="") {
        console.log("Your Mobile is unregistered");
    } else {
        console.log("Your Mobile is " + Mobile);
    }
    
    if (Mobile=="") {
        console.log("Your Email is unregistered");
    } else {
        console.log("Your Email is " + Email);
    }
    
    console.log("THIS IS THE SECOND LOGIN TEST")
    CurrentValue5=document.getElementById("loginPassword").value;
    CurrentValue6=document.getElementById("loginConfirm").value;

    if (CurrentValue5 == "" || CurrentValue6 == "") {
        alert("You have not succesfully logged in");
    } else if (CurrentValue5 != CurrentValue6 ) {
        alert("You have not logged in succesfully");
    } else if (CurrentValue5 == CurrentValue6) {
    alert("You have logged in succesfully");
}
    
    
}

