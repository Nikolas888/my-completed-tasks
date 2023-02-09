// BEGIN
const makeItFunny = (text, x) => {
    let i = 1;
    let res = '';
    const y = i !== text.length;
    while (i <= text.length) {
      if (i % x === 0 && y) {
        res += text[i - 1].toUpperCase();
      } else if (i % x !== 0 && y) {
        res += text[i - 1];
      } else {
        res += text[i - 1];
      }
      i++;
    }
    return res;
  };
  // END
  
  export default makeItFunny;