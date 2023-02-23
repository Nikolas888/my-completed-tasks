// BEGIN
const getHiddenCard = (a, b = 4) => {
  return `${'*'.repeat(b)}${a.slice(12, 16)}`;
};
// END

export default getHiddenCard;
