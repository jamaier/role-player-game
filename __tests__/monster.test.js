import Monster from '../src/js/monster';

describe('Monster', () => {

test('monster will have a name, armor class, and speed', () => {
  const monster = new Monster("Mind Flayer");
  expect(monster.name).toEqual("Mind Flayer");
});
  

});