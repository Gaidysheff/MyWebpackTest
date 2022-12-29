async function start() {
  return await Promise.resolve("async is working pretty good");
}

start().then(console.log);

class Util {
  static id = Date.now();
}

console.log("Util ID:", Util.id);

const unused_for_checking_eslint = 777;

import("lodash").then((_) => {
  console.log("Lodash", _.random(0, 42, true));
});
