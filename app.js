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
    location.href = "/homepage.html";
}