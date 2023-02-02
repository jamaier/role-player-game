import Character from '../src/js/character';

describe('Character', () => {
  test('create a character with attributes such as name, age, character class, weapon of choice', () => {
    const mainCharacter = new Character("Old Norse", 200, "mage", "Hammer");
    expect(mainCharacter.name).toEqual("Old Norse");
    expect(mainCharacter.age).toEqual(200);
    expect(mainCharacter.characterClass).toEqual("mage");
    expect(mainCharacter.weapon).toEqual("Hammer");
    expect(mainCharacter.level).toEqual(0);
    expect(mainCharacter.health).toEqual(0);
  });

  test('character will shout a catchphrase', () => {
    const mainCharacter = new Character("Old Norse", 200, "mage", "Hammer");
    expect(mainCharacter.battleCry()).toEqual("CHAOS AND ANARCHY!!!");
  });

  test('character will cast Fireball', () => {
    const mainCharacter = new Character("Old Norse", 200, "mage", "Hammer");
    expect(mainCharacter.castSpell()).toEqual("Fireball");
  });
  
  test('character will attack while yelling CHAOS AND ANARCHY!!! and casting a fireball', () => {
    const mainCharacter = new Character("Old Norse", 200, "mage", "Hammer");
    expect(mainCharacter.bestAttack()).toEqual("CHAOS AND ANARCHY!!! Fireball");
  });

  test('character will gain health by (something)', () => {
    const mainCharacter = new Character("Old Norse", 200, "mage", "Hammer");
    expect(mainCharacter.SetHealth()).toEqual(10);
  });


});