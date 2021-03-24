const Potion = require('../lib/Potion');
jest.mock('../lib/Potion');

const { test, expect } = require('@jest/globals');
const Player = require('../lib/Player');

test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toStrictEqual(expect.any(Number));
    expect(player.strength).toStrictEqual(expect.any(Number));
    expect(player.agility).toStrictEqual(expect.any(Number));
    expect(player.inventory).toStrictEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});

test('gets player stats as an object', () => {
    const player = new Player('Dave');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

test('gets inventory from player or returns false', () => {
    const player = new Player('Dave');

    expect(player.getInventory()).toEqual(expect.any(Array));

    player.inventory = [];

    expect(player.getInventory()).toEqual(false);
});