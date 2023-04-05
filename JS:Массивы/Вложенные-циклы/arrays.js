// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

import _ from 'lodash';

// BEGIN (write your solution here)
const getSameCount = (coll1, coll2) => {
  let count = 0;
  const uniqColl1 = _.uniq(coll1);
  const uniqColl2 = _.uniq(coll2);

  for (const item1 of uniqColl1) {
    for (const item2 of uniqColl2) {
      if (item1 === item2) {
        count += 1;
        break;
      }
    }
  }

  return count;
};

export default getSameCount;
// END
