const findTheOldest = function (arr) {
  arr.forEach((person) => {
    if (!("yearOfDeath" in person)) {
      const currentDate = new Date();
      person.yearOfDeath = currentDate.getFullYear();
    }
    person.age = person.yearOfDeath - person.yearOfBirth;
  });

  return arr.reduce((oldest, curr) => {
    const oldestAge = oldest.age;
    const currentAge = curr.age;
    return oldestAge < currentAge ? curr : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
