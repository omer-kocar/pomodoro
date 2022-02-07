//Modal
$(function() {
    $("#setting").click(function() {
        $("#myModal").modal("show");
    });
});
// Login
// $(function() {
//     $("#login").click(function(){
//         login.style.display="block"
//         $(".signup-form").modal("show");

//     })
// })
let login = document.getElementById("login")
let modal = document.querySelector(".signup-form")
let close = document.querySelector("#close")
let bdy = document.querySelector(".bdy")
login.onclick = function() {

    if (modal.style.display = "block") { document.body.style.backgroundColor = "rgba(80, 80, 80, 0.8)"; } else {
        close()

    }
}
close.onclick = function() {
    modal.style.display = "none"
    document.body.style.backgroundColor = "white"
}
window.onclick = function(login) {
    if (login.target == modal) {
        modal.style.display = "none"
    }
}

//Kronometre

// To do list