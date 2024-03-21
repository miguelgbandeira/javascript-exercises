const repeatString = function (string, numberOfRepetitions) {
  if (numberOfRepetitions < 0) {
    return "ERROR";
  }
  let result = "";
  for (let i = 0; i < numberOfRepetitions; i++) {
    result += string;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
