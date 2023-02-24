const truncate = (text, length) => {
  // BEGIN (write your solution here)
  const res = text.slice(0, length);
  return `${res}...`; // "wel"
  // END
};

export default truncate;

