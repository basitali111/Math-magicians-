import operator from '../components/Logic/operate';

test('The symbol "+" should return Sum of two numbers', () => {
  expect(operator('5', '6', '+')).toBe('11');
});

test('The symbol "-" should return substract of two numbers', () => {
  expect(operator('5', '6', '-')).toBe('-1');
});

test('The symbol "x" should return mutiply of two numbers', () => {
  expect(operator('5', '6', 'x')).toBe('30');
});

test('The symbol "÷" should return divide of two numbers', () => {
  expect(operator('100', '2', '÷')).toBe('50');
});

test('The symbol "%" should return modulus of two numbers', () => {
  expect(operator('250', '24', '%')).toBe('10');
});
