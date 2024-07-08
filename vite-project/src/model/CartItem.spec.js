import { vi, describe, expect, test, beforeEach, afterAll } from 'vitest'

const path = require('path');
const ScoreCounter = require('score-tests');

const testSuiteName = 'CartItem Tests';
const scoresDir = path.join(__dirname, '..', '..', '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  test('CartItem.js exports a CartItem class', async () => {
    // we have to do this weird import statement like this because
    // 1. we want to reset the module import every time
    // 2. CartItem is a default export
    const { default: CartItem } = await import('./CartItem');

    const item = new CartItem();
    expect(item instanceof CartItem).toBe(true);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  test('Instances of CartItem have the correct instance properties', async () => {
    const { default: CartItem } = await import('./CartItem');

    const item1 = new CartItem('apple', 1);
    const sortedPropertyNames = Object.getOwnPropertyNames(item1).sort();
    expect(sortedPropertyNames).toEqual(['id', 'name', 'price'])

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  test('Instances of CartItem have unique, ascending ids, starting with 1', async () => {
    const { default: CartItem } = await import('./CartItem');

    const item1 = new CartItem('apple', 5);
    const item2 = new CartItem('banana', 10);
    const item3 = new CartItem('cherry', 15);

    expect(item1).toEqual({ name: 'apple', price: 5, id: 1 })
    expect(item2).toEqual({ name: 'banana', price: 10, id: 2 })
    expect(item3).toEqual({ name: 'cherry', price: 15, id: 3 })

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => {
    scoreCounter.add(expect);
    vi.resetModules();
  })
  afterAll(scoreCounter.export);
})