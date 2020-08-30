import {
  split,
  equals,
  type,
  findIndex,
  splitAt,
  pipe,
  not,
  trim,
  evolve,
} from 'ramda';

// "Compose Address"

// Rua Professor Picarolo 162, Apt 62.
// Av. Whatever 1050, bloco B.
// TODO: Considerar tal caso: 5 Travessa Santa Quiteria
// TODO: considerar enderecos de brasilia

const isNumber = pipe(
  parseInt,
  isNaN,
  not,
);

const indexOfFirstNumber = str => findIndex(isNumber, [...str]);

const transformations = {
  name: trim,
  number: parseInt,
  complement: trim,
};

const composeAddress = (input) => {
  const [firstLine, complement] = split(',', input);
  const [name, number] = splitAt(indexOfFirstNumber(firstLine), firstLine);
  return evolve(transformations, {
    name,
    number,
    complement,
  });
};

export { isNumber, indexOfFirstNumber, composeAddress };
