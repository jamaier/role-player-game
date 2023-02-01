import Character from '../src/js/character';

describe('Character', () => {
  test('should return the name of the character', () => {
    const characterName = new Character("Old Norse"); // make sure to give a value etc
    expect(characterName.name).toEqual("Old Norse");
  });

});