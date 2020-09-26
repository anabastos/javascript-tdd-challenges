import { hasSameBread } from '../src/bread';

test('if has same bread returns true', () => {
  expect(hasSameBread(
    ["pao branco", "alface", "tomate", "pao branco"],
    ["pao branco", "alface", "chedder", "pao branco"]
  )).toBeTruthy();
});

test('if has different bread returns false', () => {
  expect(hasSameBread(
    ["pao branco", "alface", "tomate", "pao branco"],
    ["pao integral", "alface", "chedder", "pao integral"]
  )).toBeFalsy();
});

test('if has different last bread returns false', () => {
  expect(hasSameBread(
    ["pao branco", "alface", "tomate", "pickles", "pao branco"],
    ["pao integral", "chedder", "pao parmesao"]
  )).toBeFalsy();
});

test('if has different first bread returns false', () => {
  expect(hasSameBread(
    ["pao branco", "alface", "pao branco"],
    ["pao 9 graos", "alface", "chedder", "pao parmesao"]
  )).toBeFalsy();
});
