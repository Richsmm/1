const { test } = require('node:test');
const assert = require('node:assert');
const { add, multiply } = require('./math');

test('сложение работает', () => {
  assert.equal(add(2, 3), 5);
  assert.equal(add(-1, 1), 0);
});

test('умножение работает', () => {
  assert.equal(multiply(2, 3), 6);
  assert.equal(multiply(0, 5), 0);
});
