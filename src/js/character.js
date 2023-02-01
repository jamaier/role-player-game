export default class Character {
  constructor(name, age, characterClass, characterLevel) {
    this.name = name;
    this.age = age;
    this.characterClass = characterClass;
    this.characterLevel = characterLevel;
    this.characterXp = 0;
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