import Character from '../src/js/character';

describe('Character', () => {
  test('should return the name of the character', () => {
    const characterName = new Character(name);
    expect(characterName.name).toMatch("Old Norse");
  });

});