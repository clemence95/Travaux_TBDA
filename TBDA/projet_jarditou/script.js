let nom = document.getElementById("nom").value.trim()
let prenom  = document.getElementById("prenom").value.trim()
let date = document.getElementById("date").value.trim()
let code = document.getElementById("code").value.trim()
let mail = document.getElementById("mail").value.trim()
let demande = document.getElementById("demande").value.trim()
let question = document.getElementById("question").value.trim()
let nom_error = document.getElementById("nom_error");
let prenom_error = document.getElementById("prenom_error");
let date_error = document.getElementById("date_error");
let code_error = document.getElementById("code_error");
let mail_error = document.getElementById("mail_error");
let demande_error = document.getElementById("demande_error");
let question_error = document.getElementById("question_error");

let valid = true;

let form = document.querySelector('#formulaire_contact');
form.addEventListener('submit', (event) => {

if (!form.nom.value){
    let error = document.querySelector('#nom_error')
    event.preventDefault();
    error.textContent = "le champ est obligatoire"
    error.style.color = "red"
}

if (!form.prenom.value){
    let error = document.querySelector('#prenom_error')
    event.preventDefault();
    error.textContent = "le champ est obligatoire"
    error.style.color = "red"
}

if (!form.date.value){
    let error = document.querySelector('#date_error')
    event.preventDefault();
    error.textContent = "le champ est obligatoire"
    error.style.color = "red"
}

if (!form.code.value){
    let error = document.querySelector('#code_error')
    event.preventDefault();
    error.textContent = "le champ est obligatoire"
    error.style.color = "red"
}
if (!form.mail.value){
    let error = document.querySelector('#mail_error')
    event.preventDefault();
    error.textContent = "le champ est obligatoire"
    error.style.color = "red"
}

if (!form.demande.value){
    let error = document.querySelector('#demande_error')
    event.preventDefault();
    error.textContent = "le champ est obligatoire"
    error.style.color = "red"
}

if (!form.question.value){
    let error = document.querySelector('#question_error')
    event.preventDefault();
    error.textContent = "le champ est obligatoire"
    error.style.color = "red"
}
 }
 )
