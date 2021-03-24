const { test, expect } = require('@jest/globals');
const Player = require('../lib/Player');

test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toStrictEqual(expect.any(Number));
    expect(player.strength).toStrictEqual(expect.any(Number));
    expect(player.agility).toStrictEqual(expect.any(Number));
});

// test('gets player stats as an object', () => { });

// test('gets inventory from player or returns false', () => { });