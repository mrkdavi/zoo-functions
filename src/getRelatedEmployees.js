const data = require('../data/zoo_data');

function isManager(id) {
  const res = data.employees.some((emp) => emp.managers.some((mng) => mng === id));
  return res;
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  const managed = data.employees.filter((emp) => emp.managers.some((mng) => mng === managerId));
  const managedFormatted = managed.map((v) => `${v.firstName} ${v.lastName}`);
  return managedFormatted;
}

module.exports = { isManager, getRelatedEmployees };
