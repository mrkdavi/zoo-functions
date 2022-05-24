const data = require('../data/zoo_data');

function getDays() {
  const days = Object.keys(data.hours);
  return days;
}

function scheduleIdentifier(schedule) {
  if (schedule === 'Monday') return schedule;
  if (data.species.some((v) => v.name === schedule)) return 'animal';
  if (getDays().includes(schedule)) return 'day';
  return 'other';
}

function getDaysByAnimal(animalName) {
  const animal = data.species.find((anm) => anm.name === animalName);
  const animalDays = animal.availability;
  return animalDays;
}

function getAnimalsByDay(day) {
  const animals = data.species.filter((v) => v.availability.includes(day));
  return animals;
}

function mapAnimalsName(animals) {
  const animalsName = animals.map((v) => v.name);
  return animalsName;
}

function getHoursByDay(day) {
  const hours = data.hours[day];
  return hours;
}

function handlerMonday(isFormatted) {
  const obj = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return isFormatted ? { Monday: obj } : obj;
}

function scheduleFormatter(schedule, day, hours, animalsName) {
  const sch = schedule;
  sch[day] = {
    officeHour: `Open from ${hours.open}am until ${hours.close}pm`,
    exhibition: animalsName,
  };
}

function getScheduleByDayFormatted(day) {
  const schedule = {};
  const animals = getAnimalsByDay(day);
  const animalsName = mapAnimalsName(animals);
  const hours = getHoursByDay(day);
  scheduleFormatter(schedule, day, hours, animalsName);
  return schedule;
}

function getScheduleAll() {
  const schedule = {};
  const openDays = getDays();
  openDays.pop();
  openDays.forEach((day) => {
    const animals = getAnimalsByDay(day);
    const animalsName = mapAnimalsName(animals);
    const hours = getHoursByDay(day);
    scheduleFormatter(schedule, day, hours, animalsName);
  });
  schedule.Monday = handlerMonday(false);
  return schedule;
}

function getSchedule(scheduleTarget) {
  const scheduleType = scheduleIdentifier(scheduleTarget);
  switch (scheduleType) {
  case 'animal':
    return getDaysByAnimal(scheduleTarget);
  case 'day':
    return getScheduleByDayFormatted(scheduleTarget);
  case 'Monday':
    return handlerMonday(true);
  default:
    return getScheduleAll();
  }
}

module.exports = getSchedule;
