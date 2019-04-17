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

// da sistemare

const nodeMailer = require('nodemailer');

// colleggo elementi 
var dataPrenota =  document.getElementById("dataPrenota").value;
var nomePrenota = document.getElementById("nomePrenota").value;
var cognomePrenota = document.getElementById("cognomePrenota").value;
var emailPrenota = document.getElementById("emailPrenota").value;
var nPersone = document.getElementById("personePrenota").value;
var notePrenota = document.getElementById("notePrenota").value;



exports.sendMail = function(req,res){
    const transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,  
        auth: {
            user: 'InfluencerOutreachExperts@gmail.com',
            pass: 'vale5398'
        }
    });
    const mailOptions = {
        from: emailPrenota, // sender address
        to: 'InfluencerOutreachExperts@gmail.com', // list of receivers
        subject: "Prenotazione Tavolo", // Subject line
        text: "Data"+dataPrenota+"Nome"+nomePrenota+"Cognome"+cognomePrenota+"emailPrenota"+emailPrenota+"Numero Persone"+nPersone+"notePrenota"+notePrenota, // plain text body
        html: '<b>Prenotazione Tavolo</b>' // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(400).send({success: false})
        } else {
            res.status(200).send({success: true});
        }
    });


}