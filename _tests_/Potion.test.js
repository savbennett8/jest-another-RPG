const { test, expect } = require('@jest/globals');
const Potion = require('../lib/Potion.js');

test('creates a health potion object', () => {
    //creates a 'new' potion object to store it's name and value
    //Capitalization of 'Potion' indicates it's a constructor funciton
    const potion = new Potion('health');

    expect(potion.name).toStrictEqual('health');
    //'expect.any()' method takes a constructor as an argument
    expect(potion.value).toStrictEqual(expect.any(Number));
});