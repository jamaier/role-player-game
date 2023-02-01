import Character from '../src/js/character';

describe('Character', () => {
  test('should return the name of the character', () => {
    const characterName = new Character("Old Norse"); // make sure to give a parameter
    expect(characterName.name).toEqual("Old Norse"); // match the parameter above
  });

  test('should return the age of the character', () => {
    const characterName = new Character("Old Norse"); // make sure to give a parameter
    expect(characterName.name).toEqual("Old Norse"); // match the parameter above
    expect(characterName.age).toEqual("200");
  });

});