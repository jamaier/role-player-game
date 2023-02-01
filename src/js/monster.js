/* eslint-disable no-unused-vars */
export default class Monster {
  
  constructor(name, armorClass, speed) {
    this.name = name;
    this.armorClass = armorClass;
    this.speed = speed;
  }

  attack() {
    const attackNames = ["Tentacles", "Extract-Brain", "Mind-Blast"];
    let attackArray = [];
    let array = attackNames.splice(" ");
    for (let i = 0; i <= array.length; i++) {
      if (array[i] === "Tentacles") {
        attackArray.push("Tentacles");
      }
      if (array[i] === "Extract-Brain") {
        attackArray.push("Extract-Brain");
      }
      if (array[i] === "Mind-Blast") {
        attackArray.push("Mind-Blast");
      }
    } return attackArray;
  }
}