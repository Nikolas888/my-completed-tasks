// BEGIN
const countChars = (str, char) => {
    let i = 0;
    let count = 0;
    while (i < str.length) {
      if (str[i].toLowerCase() === char.toLowerCase()) {
        // Считаем только подходящие символы
        count += 1;
      }
      // Счетчик увеличивается в любом случае
      i += 1;
    }
  
    return count;
  };
  // END
  
  export default countChars;