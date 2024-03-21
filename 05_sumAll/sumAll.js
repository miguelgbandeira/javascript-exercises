const sumAll = function (min, max) {
  if (min < 0 || max < 0 || typeof min != "number" || typeof max != "number") {
    return "ERROR";
  }
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  let result = 0;
  for (let i = min; i <= max; i++) {
    result += i;
  }
  return result;
};

sumAll(123, 1);

// Do not edit below this line
module.exports = sumAll;
