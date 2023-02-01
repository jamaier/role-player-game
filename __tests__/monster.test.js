import Monster from '../src/js/monster';

describe('Monster', () => {

  test('monster will have a name, armor class, and speed', () => {
    const monster = new Monster("Mind Flayer", 15, "30 ft.");
    expect(monster.name).toEqual("Mind Flayer");
    expect(monster.armorClass).toEqual(15);
    expect(monster.speed).toEqual("30 ft.");
  });
  
  test('Monster should have access to all attack options', () => {
    const monster = new Monster("Mind Flayer", 15, "30 ft.");
    expect(monster.selectAttack()).toContain("Tentacles"); // use toContain instead of toEqual
    expect(monster.selectAttack()).toContain("Extract-Brain");
    expect(monster.selectAttack()).toContain("Mind-Blast");
  });

  // test('Monster should use Extract-brain', () => {
  //   const monster = new Monster("Mind Flayer", 15, "30 ft.");
  //   expect(monster.selectAttack()).toContain("Extract-Brain");
  // });
});