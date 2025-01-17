/* eslint-disable no-undef */
import Character from '../src/js/character';

describe('Character', () => {
  test('create a character with attributes such as name, age, character class, weapon of choice', () => {
    const mainCharacter = new Character("Old Norse", 200, "mage", "Hammer", 0, 0);
    expect(mainCharacter.name).toEqual("Old Norse");
    expect(mainCharacter.age).toEqual(200);
    expect(mainCharacter.characterClass).toEqual("mage");
    expect(mainCharacter.weapon).toEqual("Hammer");
    expect(mainCharacter.health).toEqual(0);
    expect(mainCharacter.level).toEqual(0);
  });

  test('character will shout a catchphrase', () => {
    const mainCharacter = new Character("Old Norse", 200, "mage", "Hammer", 0);
    expect(mainCharacter.battleCry()).toEqual("CHAOS AND ANARCHY!!!");
  });

  test('character will cast Fireball', () => {
    const mainCharacter = new Character("Old Norse", 200, "mage", "Hammer", 0);
    expect(mainCharacter.castSpell()).toEqual("Fireball");
  });
  
  test('character will attack while yelling CHAOS AND ANARCHY!!! and casting a fireball', () => {
    const mainCharacter = new Character("Old Norse", 200, "mage", "Hammer");
    expect(mainCharacter.bestAttack()).toEqual("CHAOS AND ANARCHY!!! Fireball");
  });

  test('character will gain health by (something)', () => {
    const mainCharacter = new Character("Old Norse", 200, "mage", "Hammer", 0);
    expect(mainCharacter.setHealth("Old Norse")).toEqual(10);
  });

  test('character will gain health by (something)', () => {
     const mainCharacter = new Character("Old Norse", 200, "mage", "Hammer", 10);
     expect(mainCharacter.setHealth()).toEqual(20);
  });

  test('character will increase a level when their health increases', () => {
    const mainCharacter = new Character("Old Norse", 200, "mage", "Hammer", 10, 1);
    expect(mainCharacter.levelUp()).toBe(2);
  });


});