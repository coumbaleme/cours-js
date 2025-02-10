console.log("Bonjour")


//Syntaxe de base

// commentaire sur une ligne avec 2 //


/*
 commentaire sur plusieurs lignes je suis la deuxieme ligne.
 */

// 1 : declarer une variable en js

// En js il ya DEUX variables let et const
// pour déclarer une variable :

 let nom;

//-- 2 affecter une variable à une variable
nom="Mohamet";

let ville ="Paris" // on déclarer une variable et on lui affecte une valeur en méme temps.
console.log(ville)

ville="Londre"

console.log (ville);

// avec une variable const on doit la déclarer et lui affecte une valeur sinon une erreur
//const prenom; une erreur s'affiche

const prenom="Moussa"

console.log("const prenom:",prenom);
// 

// on ne peut pas donner une autre valeur a une variable const une erreur s'affichera dans la console
// prenom="Ousmane" -----> erreur


//--3afficher une boite de dialogue
//alert("je suis une boite de dialogue")

//--4 afficher dans la console avec console log()

console.log( prenom)


/*------------------------------
----------------LES TYPES DES VARIABLES---------------*/

// --1 les chaines de caracteres (string)
// un string est entourer de guillemet ogligatoirement
let vacances="2017";
 let destination="Pantin"

//--2Les bombres entier (integre === int)
//pas de guillemets

let annee= 2017
//--3les nombres décimaux avec "."" (float)
// sans guillemet

let nombre_a_virgule=5.32;
// 3 les booléens true et false
let boolean_false=false
let boolean_true=true

//-- 5 typeof permet de connaitre le type de la variable
console.log("annee :", annee)
console.log("type de année :", typeof annee)

console.log("boolean:" , typeof boolean_false)
console.log("type de vacances:",typeof vacances)

console.log("vacances" , parseInt(vacances))

// string to number
let vacances_number=parseInt(vacances)

//string ou boolean to string
console.log("vacances_number to string",
     vacances_number.toString())

     console.log("boolean  to string:",boolean_false.toString())

     // string to float

     let unChiffre="3.45"
     console.log ("srin to number", parseInt(unChiffre))//3 ne prend pas la decimal
     console.log ("srin to float",parseFloat (unChiffre))//3.45

