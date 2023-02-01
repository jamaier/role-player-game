import Character from '../src/js/character';

describe('Character', () => {
  test('should return the name of the character', () => {
    const mainCharacter = new Character("Old Norse"); // make sure to give a parameter
    expect(mainCharacter.name).toEqual("Old Norse"); // match the parameter above
  });

  test('should return the age of the character', () => {
    const mainCharacter = new Character("Old Norse", 200); // make sure to give a parameter
    expect(mainCharacter.name).toEqual("Old Norse"); // match the parameter above
    expect(mainCharacter.age).toEqual(200);
  });

  test('should return the class of the character', () => {
    const mainCharacter = new Character("Old Norse", 200, "mage"); // make sure to give a parameter
    expect(mainCharacter.name).toEqual("Old Norse"); // match the parameter above
    expect(mainCharacter.age).toEqual(200); // add parameters to object constructor
    expect(mainCharacter.characterClass).toEqual("mage");
  });

  test('character will shout a catchphrase', () => {
    const mainCharacter = new Character("Old Norse", 200, "mage");
    expect(mainCharacter.battleCry()).toEqual("CHAOS AND ANARCHY!!!");
  });
  
});