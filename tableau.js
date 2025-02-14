/*------------LES TABLEAUX------------*/

// CREER UN TABLEAU
let tab1= new Array("element0","element1")

let tab2= new Array("element0","element1")

let tab3= new Array("element0","element1")//à prioriser plus clair

// Déclaratin d'une liste (tableau)
// tableau simple de nombre
let nombres =[1,2,3,4,5]
// tableau de chaine de caracter
let fruits = ["banan, pomme, orage"]
// index         1      2      3
// tableau mixte (diferent type de données)

let mixte=[42,"hello",true,{nom:"alice"},[1,2,3,]]
// index     0   1     2     3          4
// affichage de tableau
console.log("nombre;"  ,nombres)
console.log("fruits;"  ,fruits)
console.log("mixte;"  ,mixte)

//*****/ acceder aux element d'un tableau
console.log("premier fruit:", fruits[0])
console.log("deuxieme fruit:", fruits[1])
console.log("dernier fruit:", fruits[fruits.length-1])

console.log("mixte",mixte[0])
console.log("mixte",mixte[3])
console.log("mixte",mixte[4][2])
console.log("mixte",mixte[3].nom)
console.log("mixte",mixte[3]["nom"])

// trouver l'index d'un tableau

fruits.indexOf("pomme")
console.log(fruits.indexOf("pomme"))

//**********
// MODIFICATION DE L'ORIGINAL D'UN TABLEAU */

//****Modifier un element du tableau */

fruits[0]="fruits"
console.log("fruits modifier",fruits)
//******ajouter un element dans un tablau */

fruits.push("mangue")//ajouter à la fin
console.log("fruits avec mangue",fruits)

fruits.unshift("cerise")// ajoute à la prémier
console.log(fruits)

fruits.splice(1,0,"clementine")//ajoute à la deuxieme
console.log(fruits)


letindex=fruits.indexOf("pomme")
fruits.splice(index ,1)//supprimer pomme
console.log("pomme supprimer", resultat)

fruits.shift()// supprimer 1er élement du tableau
console.log("suppimer 1er élemnets",fruits)


//******supprimer des elements */
fruits.pop()// supprime dernier elements
console.log(fruits)

//MODIFICATION EN CREANT UN NOUVEAU TABLEAU
// extraire une partie du tableau SANS modifier l'original
let nouveaufruits=fruits.splice(1.2)
console.log("new",nouveaufruits)

animals.filter(
    function(animals){
        animals !=="ant"
    }
)
console.log("new")

const ages =[32,33,18,5,17,20,40]
const resultat= ages.filter(
    function chechAdult (parametre){
        return parametre >=18;
    }
);
console.log("nouveau tableau de age", resultat)
console.log("nouveau tableau de age", resultat)