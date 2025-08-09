let user = JSON.parse(localStorage.getItem("currentUser"));
console.log(user.name);
document.querySelector("#welcomeMessage").innerHTML = `welcome ${user.name}`

$("#LogoutBtn").on("click" , function(){
     window.location.href = "./index.html";
    localStorage.removeItem("currentUser");
})
