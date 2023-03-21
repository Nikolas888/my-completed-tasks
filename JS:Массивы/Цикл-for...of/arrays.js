// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
export default (coll) => {
  const itemsCount = coll.length;

  if (itemsCount === 0) {
    return null;
  }

  let sum = 0;
  for (const item of coll) {
    sum += item;
  }

  return sum / itemsCount;
};
// END

