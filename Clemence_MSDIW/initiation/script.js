console.log('connecté !');
/*document.getElementById('titre').style.color = "green"; */
/* Selection de l'élément à partir de son id puis accès à la propriété color et enfin la nouvelle valeur (green) */
/* document.getElementById('titre') */
/* const titre = document.getElementById('titre'); */
/* Mise en place de l'élément dans une mémoire temporaire appelée ici "titre" */
/* ATTENTION il ne peut pas y avoir deux variables du même nom */
/* titre.style.color = "green" */
/* deux façons d'initialiser (de créer) une variable : let et const. */
/* let = une veriable qui doit changer de valeur ET const une variable qui ne doit pas changer de valeur */
// let titre = document.getElementById('titre');
// titre.style.color = "green";
// titre = 2;
// console.log(titre); // renvoie 2 //  

let score = 0 // Je stocke un nombre
console.log(score, 'initialisation'); // je verifie
score = score + 1 // opération 
console.log(score, 'après addition'); // je vérifie

// Je stocke une chaine de caractère 
const cours = 'Javascript';
// Je verifie
console.log(cours, 'cours');

// Je concatène 
const mot1 = 'Hello';
const mot2 = 'World !';
const phrase = mot1 + '' + mot2 // Concaténation
console.log(phrase,"phrase"); // Je verifie

// Je selectionne et je stocke 
var i = 0
let titre = document.getElementById("titre");
const btnRed = document.getElementById('btn-red');
console.log(btnRed,"bouton rouge");
// Je soumeets le cercle rouge à une action 
btnRed.addEventListener('click', function(){
 add();
});

const btnBlue = document.getElementById('btn-blue');
console.log(btnBlue,"bouton bleu");
btnBlue.addEventListener('click', function(){
 add();
});

function add(){
    setTimeout(function(){
        // Je supprime les cercles
        btnRed.remove();
        btnBlue.remove();
    }, 10000);
    i = i + 1;
    console.log(i);
    Chrono.innerText = setTimeout;
    titre.innerText = i;
}

