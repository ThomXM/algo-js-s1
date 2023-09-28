// CLASSE
class Pokemon {
  constructor(name, attack, defense, hp) {
    this.name = name
    this.attack = attack
    this.defense = defense
    this.hp = hp
  }

  // ATTAQUE
  attaquer(pokemonCible) {
    const { name, attack, defense } = this
    let degatsInfliges = attack - pokemonCible.defense
    if (degatsInfliges < 0) {
      degatsInfliges = 0 }
    console.log(  name + 'attaque' + pokemonCible.name )
    pokemonCible.subirDegats(degatsInfliges)

  }

// SUBIR DES DEGATS
  subirDegats(degats) {
    this.hp -= degats
    console.log(  this.name + "subit" + degats + "dégâts.Points de vie restants :" + this.hp )
  }
}

// LES 2 POKEMONS 
// RAPPEL( NOM, ATTAQUE, DEFENSE, HP )

let pokemon1 = new Pokemon('Tortank', 100, 30, 1300)
let pokemon2 = new Pokemon('Dracaufeu', 150, 20, 1000)

// BOUCLE WHILE AVEC AFFICHAGE DES STATS

while (pokemon1.hp > 0 && pokemon2.hp > 0) {
  pokemon1.attaquer(pokemon2)
  console.log("Statistiques après l'attaque :")
  console.log("Tortank:" + pokemon1.hp + "HP")
  console.log("Dracaufeu:" + pokemon2.hp + "HP")
  
  
  if (pokemon2.hp > 0) {
    pokemon2.attaquer(pokemon1)
    console.log("Statistiques après l'attaque :")
    console.log("Tortank:" + pokemon1.hp + 'HP')
    console.log('Dracaufeu:' + pokemon2.hp + 'HP')
  }
}

// AFFICHAGE FINAL

console.log("Fin du combat !")
console.log("Statistiques finales : Dracaufeu: " + pokemon2.hp + " HP Tortanck: " + pokemon1.hp + " HP")


