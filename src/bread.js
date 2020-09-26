import {
  lensIndex,
  view,
  curry,
  converge,
  equals,
  and,
} from 'ramda';

const headLens = lensIndex(0);
const lastLens = lensIndex(-1);

const isSameBread = curry((lenIndex, arr1, arr2) => equals(
  view(lenIndex, arr1),
  view(lenIndex, arr2)
));
const isFirstEqual = isSameBread(headLens);
const isLastEqual = isSameBread(lastLens);

const hasSameBread = converge(and, [isFirstEqual, isLastEqual]);

export { hasSameBread };
