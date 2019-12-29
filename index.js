// sum(1);
// sum(2); // 3

let add = num => {
  let result = num;
  const sum = r => {
    add = n => sum(r + n);
    return r;
  };
  return sum(result);
};

console.log(add(1)); // 1
console.log(add(2)); // 3
console.log(add(3)); // 6
