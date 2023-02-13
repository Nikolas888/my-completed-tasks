// BEGIN
const mySubstr = (str, x) => {
    let i = 0;
    let res = '';
    while (i < x) {
      res += str[i];
      i += 1;
    }
    return res;
  };
  // END
  
  export default mySubstr;
  