// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const buildDefinitionList = (definitions) => {
  if (definitions.length === 0) {
    return '';
  }

  const parts = [];

  for (const definition of definitions) {
    const name = definition[0];
    const description = definition[1];
    parts.push(`<dt>${name}</dt><dd>${description}</dd>`);
  }

  const innerValue = parts.join('');
  const result = `<dl>${innerValue}</dl>`;

  return result;
// END
