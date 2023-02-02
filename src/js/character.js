export default class Character {
  constructor(name, age, characterClass, weapon, health) {
    this.name = name;
    this.age = age;
    this.characterClass = characterClass;
    this.weapon = weapon;
    this.health = health;
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

  setHealth() {
    // if (name === "Old Norse") {
      this.health += 10;
    // } // this prototype doesn't need to specify the name because that's defined in our test.
    return this.health; 
  }

}