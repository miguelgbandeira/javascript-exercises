const palindromes = function (str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedString = cleanStr.split("").reverse().join("");

  return cleanStr == reversedString;
};

// Do not edit below this line
module.exports = palindromes;
