import Monster from '../src/js/monster';

describe('Monster', () => {

test('monster will have a name, armor class, and speed', () => {
  const monster = new Monster("Mind Flayer", 15, "30 ft.");
  expect(monster.name).toEqual("Mind Flayer");
  expect(monster.armorClass).toEqual(15);
  expect(monster.speed).toEqual("30 ft.");
});
  

});