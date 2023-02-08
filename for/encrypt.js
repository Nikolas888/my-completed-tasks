// BEGIN
const encrypt = (text) => {
  let res = '';
  for (let i = 0; i < text.length; i += 1) {
    if (i % 2 === 0 && i !== text.length - 1) {
      res += text[i + 1];
      res += text[i];
    } else if (i % 2 === 0 && i === text.length - 1) {
      res += text[i];
    }
  }
  return res;
};
// END

export default encrypt;