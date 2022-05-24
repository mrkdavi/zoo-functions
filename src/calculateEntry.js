const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const entrantsCounted = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) entrantsCounted.child += 1;
    else if (entrant.age < 50) entrantsCounted.adult += 1;
    else if (entrant.age >= 50) entrantsCounted.senior += 1;
  });
  return entrantsCounted;
}

function calculateEntry(entrants) {
  if (entrants === undefined) return 0;
  if (Object.entries(entrants).length === 0) return 0;
  if (entrants === 0) return 1;
  const entryValues = Object.entries(countEntrants(entrants)).reduce((acc, v, i) => {
    const sum = acc + (v[1] * data.prices[v[0]]);
    return sum;
  }, 0);
  return entryValues;
}

module.exports = { calculateEntry, countEntrants };
