const data = require('../data/zoo_data');

function countAnimals(animal) {
  const animalsCounted = {};
  data.species.forEach((spc) => { animalsCounted[spc.name] = spc.residents.length; });
  if (animal === undefined) return animalsCounted;
  if (animal.sex === undefined) return animalsCounted[animal.specie];
  const specieFound = data.species.find((spc) => spc.name === animal.specie);
  const filteredCounter = specieFound.residents.reduce((a, anm) => {
    return anm.sex === animal.sex ? a += 1 : a;
  }, 0)
  return filteredCounter
}

module.exports = countAnimals;
