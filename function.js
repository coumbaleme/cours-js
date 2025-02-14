/*---------------LES FUNCTIONS------------*/

// une fontion en javascript est un bloc de code reuitilisable qui execuse une tache specifique.
// Elle peut recevoir des paramétres , effectue des operations et retourne un resultat

// on peut déclarer une fonction en utilisant des mots de "fonctions"

function direBonjour(){
    console.log("bonjour")
}

// ici direBonjour est une function qui affiche bonjour dans la console
// pour executer cette fonction on doit l'appeler ,ne pas oublier les parentheses

direBonjour()// afficher "bonjour dans la console"

function console(message){
    console.log(message)
}

console("j'écris mon message")

let b=12

console(typeof b)
let c=3
let d=4

function fois2(n){

    return n*2
}

console.log(fois2(c))
console.log(fois2(d))
console(fois2(d))

// ecrire une fonction réutilisable  avec paramétre, qui ecris un texte dans le dom avec write()


let text= "je suis le texte"
let text2= "je suis le 2eme texte"

function textDom(){
    document.write("<h1>"+text+"</h1>")
}

textDom(text)
textDom(text2)
// function avec return
// une function peut retourner une valeur avec return

function addition (a,b){

    return a+b
}

console(addition(5,2))

function compterVoyelles(chaine){
    let voyelles="aeiouyAEIOUY"
    let compteur=0
 
    for(let i=0;i<chaine.length;i++){
console.log(chaine[i])
        if( voyelles.includes(chaine[i])){
            compteur++
        }
    }
 
    return compteur
 
}
console.log("compteur :",compterVoyelles("bonjour les gens"))