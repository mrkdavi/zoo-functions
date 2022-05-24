const data = require('../data/zoo_data');

function getEmployeeById(id) {
  const employee = data.employees.find((emp) => emp.id === id);
  return employee;
}

function getSpecieById(id) {
  const specie = data.species.find((spc) => spc.id === id);
  return specie;
}

function getFirstSpecieFromEmployee(id) {
  const employee = getEmployeeById(id);
  const firstSpecieId = employee.responsibleFor[0];
  const specie = getSpecieById(firstSpecieId);
  return specie;
}

function getOldestFromFirstSpecies(id) {
  const { residents } = getFirstSpecieFromEmployee(id);
  residents.sort((a, b) => b.age - a.age);
  const oldestAnimal = residents[0];
  const oldestAnimalFormatted = Object.values(oldestAnimal);
  return oldestAnimalFormatted;
}

module.exports = getOldestFromFirstSpecies;
