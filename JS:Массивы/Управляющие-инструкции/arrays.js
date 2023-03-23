// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
/* eslint-disable no-continue */

// BEGIN (write your solution here)
const getTotalAmount = (money, currency) => {
  let sum = 0;

  for (const bill of money) {
    const currentCurrency = bill.slice(0, 3);
    if (currentCurrency !== currency) {
      continue;
    }
    const denomination = Number(bill.slice(4));
    sum += denomination;
  }

  return sum;
};

export default getTotalAmount;
// END

