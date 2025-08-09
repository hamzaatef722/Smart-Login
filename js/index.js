let emailInput = document.querySelector("#emailInputLogin");
let passwordInput = document.querySelector("#passwordInputLogin");

let userLocalKey = "allusers";
let usersData = JSON.parse(localStorage.getItem(userLocalKey)) || [];


function checkData() {
    let userEmail = emailInput.value;
    let userPassword = passwordInput.value;

    if (usersData.length == 0) {
        $("#notfoundedMessage").removeClass("d-none").addClass("d-inline-block");
        return;
    }
    let foundUser = usersData.find(user =>
        user.email === userEmail && user.password === userPassword
    );

    if (foundUser) {
        localStorage.setItem("currentUser", JSON.stringify(foundUser));
        console.log("true data");
        removeMessage ();
        window.location.href = "./welcome.html";
        // document.querySelector("#welcomeMessage").innerHTML = `welcome ${foundUser.name}`
    } else {
        $("#notfoundedMessage").removeClass("d-inline-block").addClass("d-none");
        $("#invalidMessage").removeClass("d-none").addClass("d-inline-block");
        $("#inputMessage").removeClass("d-inline-block").addClass("d-none");
    }
}

function clearInputs() {
    emailInput.value = "";
    passwordInput.value = "";
}

$("#loginBtn").on("click", function () {
    if (emailInput.value === "" || passwordInput.value === "") {
        $("#inputMessage").removeClass("d-none").addClass("d-inline-block");
        $("#invalidMessage").removeClass("d-inline-block").addClass("d-none");
    } else {
        checkData();
        clearInputs()
    }
})

function removeMessage (){
     $("#notfoundedMessage").removeClass("d-inline-block").addClass("d-none");
        $("#inputMessage").removeClass("d-inline-block").addClass("d-none");
        $("#invalidMessage").removeClass("d-inline-block").addClass("d-none");
}

