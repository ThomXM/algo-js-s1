// ----------- CLASSE PERSONNAGE -------------- //

class Personnage {
    constructor(name, santéMentale) {
        this.name = name
        this.santéMentale = santéMentale
    }
}

let John = new Personnage('John', 10)

//-------- Liste des 5 musiques --------------- // 

let Musiques = ['Idol de Yoasobi', 'Prologue de Yoasobi', 'ANISSA DE WEJDENE', 'The blessing de Yoasobi', 'Into the night de Yoasobi']

// ------------------ Compteurs ---------------- // 

let compteurFeuxRouge = 0
let changementsDeTaxi = 0

// --- Boucle while avec augmentation du compteur et gestion de la santé mentale --- //

while (compteurFeuxRouge < 30 && John.santéMentale > 0) {
    compteurFeuxRouge += 1
    
    let musiqueAleatoire = Math.floor(Math.random() * Musiques.length) //  <-- Les lignes où j'ai eu le plus de difficultées //
    let musiqueJouée = Musiques[musiqueAleatoire]                      //  <-- Les lignes où j'ai eu le plus de difficultées //
    
    console.log("Musique jouée : " + musiqueJouée + ", Feux restants : " + (30 - compteurFeuxRouge))
    
    if (musiqueJouée == 'ANISSA DE WEJDENE') {
        John.santéMentale -= 1
        changementsDeTaxi += 1  
        
        console.log('Changement de taxi')
    }
}

// ----------- Conditions de sortie ----------- //

if (John.santéMentale < 1) {
    console.log('EXPLOSION !!!!!')

} else if (compteurFeuxRouge === 30) {
    console.log('Bravo John est arrivé chez lui en vie après ' + changementsDeTaxi + ' changements de taxi !')
}
