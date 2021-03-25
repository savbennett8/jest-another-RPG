const { TestScheduler } = require('@jest/core');
const Enemy = require('../lib/Enemy');
const Potion = require('../lib/Potion');

jest.mock('../lib/Potion.js');

test('creates an enemy object', () => {
    const enemy = new Enemy('goblin', 'sword');

    expect(enemy.name).toBe('goblin');
    expect(enemy.weapon).toBe('sword');
    expect(enemy.health).toStrictEqual(expect.any(Number));
    expect(enemy.strength).toStrictEqual(expect.any(Number));
    expect(enemy.agility).toStrictEqual(expect.any(Number));
    expect(enemy.potion).toEqual(expect.any(Object));
});