import {
  composeAddress,
  isNumber,
  indexOfFirstNumber,
  isNumberR,
} from '../src/composeAddress';

test('isNumber checks if is a number', () => {
  expect(isNumber(1)).toBe(true);
  expect(isNumber('a')).toBe(false);
});

test('indexOffFirstNumber gets index of first number in array', () => {
  expect(indexOfFirstNumber('aus id sdjf110239')).toBe(11);
  expect(indexOfFirstNumber('1')).toBe(0);
  expect(indexOfFirstNumber('   jsidfj iasjd ')).toBe(-1);
});

test('Inputs Rua Professor Picarolo 162, Apt 62 and returns composed address', () => {
  expect(composeAddress('Rua Professor Picarolo 162, Apt 62')).toEqual({
    name: 'Rua Professor Picarolo',
    number: 162,
    complement: 'Apt 62'
  });

  expect(composeAddress('Rua Professor Picarolo 162, Apt 62')).toEqual({
    name: 'Rua Professor Picarolo',
    number: 162,
    complement: 'Apt 62'
  });

  expect(composeAddress('Av. Whatever 1050, bloco B')).toEqual({
    name: 'Av. Whatever',
    number: 1050,
    complement: 'bloco B'
  });
});
