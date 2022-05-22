const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const res = [];
  if (ids === undefined) return res;
  ids.forEach((id) => res.push(data.species.find((specie) => specie.id === id)));
  return res;
}

module.exports = getSpeciesByIds;
