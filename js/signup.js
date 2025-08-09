let nameInput = document.querySelector("#nameInputSignup");
let emailInput = document.querySelector("#emailInputSignup")
let passwordInput = document.querySelector("#passwordInputSignup");
let userLocalKey = "allusers";
let usersData = [];
if(JSON.parse(localStorage.getItem(userLocalKey))){
    usersData =JSON.parse(localStorage.getItem(userLocalKey)) ;
}


function signUpData() {
    let user = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    }
    usersData.push(user);
    localStorage.setItem(userLocalKey, JSON.stringify(usersData))
    console.log(usersData);

}

function checkValidation() {
    let userEmail = emailInput.value;
    let userName = nameInput.value;
    let userPassword = passwordInput.value;

    let validUser = usersData.find(user =>
        user.email.toLowerCase() === userEmail.toLowerCase() ||
         user.name.toLowerCase() === userName.toLowerCase()
    );
    if (nameInput.value==="" || emailInput.value === "" || passwordInput.value === "") {
        console.log("empty input");
        $("#inputMessage").removeClass("d-none").addClass("d-inline-block");
        // $("#invalidMessage").removeClass("d-inline-block").addClass("d-none");
    }else if(validUser){
         console.log("this name or email is already taken");
         $("#invalidMessage").removeClass("d-none").addClass("d-inline-block");
         $("#inputMessage").removeClass("d-inline-block").addClass("d-none");
    }else {
        signUpData()
        console.log("true data");
        removeMessage();
        window.location.href = "./index.html";
    }
}

function clearInputs(){
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
}

$("#signupBtn").on("click", function () {
    checkValidation() ;
    clearInputs()
})

function removeMessage(){
     $("#invalidMessage").removeClass("d-inline-block").addClass("d-none");
        $("#inputMessage").removeClass("d-inline-block").addClass("d-none");
}