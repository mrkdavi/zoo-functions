const data = require('../data/zoo_data');

function getEmployeeById(id) {
  const employee = data.employees.find((emp) => emp.id === id);
  if (employee === undefined) throw new Error('Informações inválidas');
  return employee;
}

function getAnimalById(id) {
  const animal = data.species.find((spc) => spc.id === id);
  if (animal === undefined) throw new Error('Informações inválidas');
  return animal;
}

function getEmployeeByName(name) {
  const employee = data.employees.find((emp) => [emp.firstName, emp.lastName].includes(name));
  return employee;
}

function employeeFormatter(id, fullName, speciesId) {
  const species = speciesId.map((specieId) => getAnimalById(specieId));
  const speciesName = species.map((spc) => spc.name);
  const speciesLocation = species.map((spc) => spc.location);
  const employee = {
    id,
    fullName,
    species: speciesName,
    locations: speciesLocation,
  };
  return employee;
}

function getEmployeeFormatted(employee) {
  const { id, responsibleFor } = employee;
  const fullName = `${employee.firstName} ${employee.lastName}`;
  const employeeFormatted = employeeFormatter(id, fullName, responsibleFor);
  return employeeFormatted;
}

function getAllEmployeesFormatted() {
  const { employees } = data;
  const employeesFormatted = employees.map((emp) => getEmployeeFormatted(emp));
  return employeesFormatted;
}

function getEmployeesCoverage(parm) {
  const parmKey = parm !== undefined ? Object.keys(parm)[0] : undefined;
  switch (parmKey) {
  case 'id':
    return getEmployeeFormatted(getEmployeeById(parm.id));
  case 'name':
    return getEmployeeFormatted(getEmployeeByName(parm.name));
  default:
    return getAllEmployeesFormatted();
  }
}

module.exports = getEmployeesCoverage;
