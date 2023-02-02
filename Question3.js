const sum = (a, b) => {
  var total = 0;
  for (var i = a; i <= b; i++) {
    total += i;
  }
  return total;
};
const calc = (a, b, c) => {
  let res = sum(a, b);
  if (c) {
    res = res * 2;
  }
  return res;
};

console.log(calc(1, 2, false));
