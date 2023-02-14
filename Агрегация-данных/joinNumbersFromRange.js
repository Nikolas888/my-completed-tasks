// BEGIN
const joinNumbersFromRange = (x, y) => {
  let i = x;
  let res = '';
  while (i <= y) {
    res += i;
    i += 1;
  }
  return res;
};
// END

export default joinNumbersFromRange;
