const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('Should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('Should display greeting', () => {
  expect(generateGreeting('nick')).toBe('Hello nick!');
})


test('Should display greeting', () => {
  expect(generateGreeting()).toBe('Hello Anonymous!');
})