/* eslint-disable no-unused-vars */
export default class Monster {
  
  constructor(name, armorClass, speed, monsterhealth) {
    this.name = name;
    this.armorClass = armorClass;
    this.speed = speed;
    this.monsterhealth = monsterhealth;
  }

  selectAttack() {
    const attackNames = ["Tentacles", "Extract-Brain", "Mind-Blast"];
    let attackArray = [];
    let array = attackNames.splice(" "); // .splice() adds or removes from arrays
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

  
  setHealth() {
    // if (name === "Old Norse") {
      // this.monsterhealth += 15;
    // } // this prototype doesn't need to specify the name because that's defined in our test.
    // return this.monsterhealth; 
  }

}

// attack() {
//     const attackNames = ["Tentacles", "Extract-Brain", "Mind-Blast"];
//     let attackArray = [];
//     let attackDamage = 0;
//     let array = attackNames.splice(" "); // adds or removes from arrays
//     for (let i = 0; i <= array.length; i++) {
//       if (array[i] === "Tentacles") {
//         attackArray.push("Tentacles");
//         attackDamage += 15;
//       }
//       if (array[i] === "Extract-Brain") {
//         attackArray.push("Extract-Brain");
//         attackDamage += 10;
//       }
//       if (array[i] === "Mind-Blast") {
//         attackArray.push("Mind-Blast");
//         attackDamage += 5;
//       }
//     } return attackArray + attackDamage;
//   }
// }