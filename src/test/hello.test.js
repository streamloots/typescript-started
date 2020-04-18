const { hello, } = require('../hello.ts');

// eslint-disable-next-line no-undef
test('Hello Works', () => {
  // eslint-disable-next-line no-undef
  expect(hello('OK')).toBe('Hello OK!');
});
