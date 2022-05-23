const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const { employees } = data;
  const res = employees.find((emp) => (
    emp.firstName === employeeName || emp.lastName === employeeName
  ));
  return res;
}

module.exports = getEmployeeByName;
