export default class Character {
  constructor(name, age, characterClass, weapon) {
    this.name = name;
    this.age = age;
    this.characterClass = characterClass;
    this.weapon = weapon;
  }

  battleCry() {
    const yell = "CHAOS AND ANARCHY!!!";
    return yell;
  }

  castSpell() {
    const cast = "Fireball";
    return cast;
  }
  
  bestAttack() {
    const spell = this.castSpell();
    const cry = this.battleCry();
    let attack = cry + " " + spell;
    return attack;
  }


  
  // levelUp() {

  // }

}