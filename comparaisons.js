// COMPARAISONS

let nb1=123 // number valeur ===123
let nb2="123"// string valeur ===123
let nb3="123"
// l'operateur de comparaisons == signifie "egal à" mais permet d'utiliser que les valeur de leur de deux variables

console.log(nb1==nb2)// true

// l'operateur de comparaison === signifie "strictement égal à"
// il permet de verifier la valeur et la type

console.log(nb1===nb2) // false nbn1 et nb2 ne sont pas égal car de différent type (number et string)

// l'oprateur !=signifie different de...en valeur
console.log(nb1 != nb2)// false on demande ici si nb1 et nb2 sont de different valeur
//l'operateur  "!==" signifie strictement different de ...valeur  et de type

console.log(nb1 !== nb2)// true ici les variables sont effectivement differentes

//Exercice

let prenom="Nassuf"

// si mon prenom indiqué dans le pompt est égale a let prenom alors disant bonjour sinon alert disant au revoire

let Nassuf= prompt("Bonjour")//je convertis le valeur du pompts en number

let loginPrenom=prompt("quel est ton prenom")

let resultPrompt=loginPronom.charAt(0).toUpperCase()+loginPrenom.
slice(1)

console.log('result',resultPrompt)

if(resultPrompt === prenom){
    alert("bienvenu")
}else{
    alert('au revoir')
}