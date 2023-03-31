/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const makeCensored = (text, stopWords) => {
  const words = text.split(' ');

  const result = [];
  for (const word of words) {
    const newWord = stopWords.includes(word) ? '$#%!' : word;
    result.push(newWord);
  }

  return result.join(' ');
};

export default makeCensored;
// END

