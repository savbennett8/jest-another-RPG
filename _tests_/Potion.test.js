const { test, expect } = require('@jest/globals');
const Potion = require('../lib/Potion.js');

test('creates a health potion object', () => {
    //creates a 'new' potion object to store it's name and value
    //Capitalization of 'Potion' indicates it's a constructor funciton
    const potion = new Potion('health');

    expect(potion.name).toStrictEqual('health');
    //'expect.any()' method takes a constructor as an argument
    expect(potion.value).toStrictEqual(expect.any(Number));
    //.toBe kept failing my test, used .toStrictEqual instead
});

test('creates a random potion object', () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});