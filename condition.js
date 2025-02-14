/*-----------LES CONDITIONS-----------------*/

// En javascript une condition permet d'executer un bloc de code seulement si certaines conditions sont vrais (true)

// structure avec "if"
// nb1=51

// if(nb1 < 50){
//     // si la condition  dans les parenthéses est vraie alord le code  al'interieur des accolades s'éxécuter
//     alert("je suis inferieur à 50")
// }

// if(true){
//     // si condition est vrai
//     //le code s'execute
// }else{
//     // si la condition est fausse
//     // c'est ce code qui s'éxécute
// }
// // exemple
// let nb2=-49
// if(nb2 < 50 ){
//     alert("nb2 est inferieur à 50")
// }else{
//     alert("nb2 est superieur à 50")
// }

// Exercice du cours

//on va utiliser les conditions pour verifier l'age d'un user
// si il a plus de 25 ans alors on lui souhaite la bienvenue dans la console
// sinon on lui dit au revoir dans la console

let maxAge = 25


let age = Number(prompt("quel est ton age ?"))//je convertis le valeur du pompts en number
console.log(prompt("quel est ton age ?"))

console.log(age)
console.log(typeof age)


if (age <= maxAge) {
    console.log("on dit au revoir")
} else {
    console.log("bienvenue")
}

// pseudo-code : if age <= maxAge {code}else{code}


if (isNaN(age)) {// si age n'est pas un number alors le code s'execute
    alert("erreur: donnée invalides")
} else if (age <= maxAge) {// si age est un nombre  mais ret inferieur à 25 alors ce code s'exécute
    alert("rentre chez toi petit")
} else {
    // si tout les conditions au dessus sont fausses alors ce code s'execute
    alert("bienvenue")
}

// SWITCH
//L'instruction switch est utiliser pour remplacer une serie de conditions "if else else if" lorsque l'on doit comparer une valeur a plusiers cas possible

const jour = "lundi"
switch (jour) {
    case "lundi":
        console.log("debut de semaine")
        break
    case "mardi":
    case "mercredi":
        console.log("milieu de semaine")

    break
    case "jeudi":
    case "vendredi":
        console.log("fin de semaine")

        break
    case "samedi":
    case "dimanche":
        console.log("c'est le week end")

        break
    default:
        console.log("jour inconnu")

}





