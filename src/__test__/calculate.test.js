import calculate from '../components/Logic/calculate';

test('The "AC" function should clear the values on display', () => {
  const state = [{
    total: '15',
    next: '6',
    operation: '+',
  },
  ];
  expect(calculate(state, 'AC')).toEqual({ next: null, total: null, operation: null });
});
test('The "+/-" should change the number from positive to negative or return vice versa', () => {
  const state = {
    total: '15',
    next: null,
    operation: 'x',
  };
  expect(calculate(state, '+/-').total).toBe('-15');
});

test('The "+/-"  do not have next null and its value is also change from positive to negatiave and vice versa', () => {
  const state = {
    total: '15',
    next: '10',
    operation: 'x',
  };
  expect(calculate(state, '+/-').next).toBe('-10');
});

test('when the "5" button got preesed the the next should be null and total should not be null,next=>5', () => {
  const state = {
    total: '30',
    next: null,
    operation: '+',
  };
  expect(calculate(state, '5').next).toBe('5');
});
test('when the "5" button got preesed the the next should not be null => add 5 as next to the string', () => {
  const state = {
    total: '15',
    next: '1',
    operation: 'x',
  };
  expect(calculate(state, '5').next).toBe('15');
});

test('if "7" button is pressed && only "total" is NOT null, => next:"7" && "total: null"', () => {
  const state = {
    total: '15',
    next: null,
    operation: null,
  };
  expect(calculate(state, '7').next).toBe('7');
  expect(calculate(state, '7').total).toBe(null);
});
