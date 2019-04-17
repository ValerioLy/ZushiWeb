firebase.auth().onAuthstaticChanged(function(user) {
    if (user){
        document.getElementById("userDiv").style.display = "block";
    } else {
        document.getElementById("userDiv").style.display = "none";
    }
});

function login(){
    var userEmail = document.getElementById("emailText").value;
    var userPassword = document.getElementById("passwordText").value;

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error: " + errorMessage);
    });
}

function indietro(){
    location.href = "/index.html";
}



// colleggo elementi 
var dataPrenota =  document.getElementById("dataPrenota").value;
var nomePrenota = document.getElementById("nomePrenota").value;
var cognomePrenota = document.getElementById("cognomePrenota").value;
var emailPrenota = document.getElementById("emailPrenota").value;
var nPersone = document.getElementById("personePrenota").value;
var notePrenota = document.getElementById("notePrenota").value;


