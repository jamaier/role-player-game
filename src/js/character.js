export default class Character {
  constructor(name, age, characterClass) {
    this.name = name;
    this.age = age;
    this.characterClass = characterClass;
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
    // const spell = castSpell();
    // const cry = battleCry();
    // let attack = cry + spell;
    // return attack.join(" ");
  }
}