const {hello} = require('../hello.ts');

test('Hello Works', () => {
    expect(hello('OK')).toBe('Hello OK!');
});
