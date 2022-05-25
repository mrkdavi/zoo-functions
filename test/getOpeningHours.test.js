const getOpeningHours = require('../src/getOpeningHours');
const { hours } = require('../data/zoo_data');

describe('Testes da função getOpeningHours', () => {
  it('A função getOpeningHours deve retornar todos os horários quando não passado nenhum parâmetro', () => {
    const actual = getOpeningHours();
    const expected = hours;
    expect(actual).toEqual(expected);
  });
  it('A função getOpeningHours deve retornar fechado quando o dia passado for Monday', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toMatch(expected);
  });
  it('A função getOpeningHours deve retornar uma string quando passado os parâmetros corretos', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toMatch(expected);
  });
  it('A função getOpeningHours deve retornar uma string quando passado os parâmetros corretos', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is close';
    expect(actual).toMatch(expected);
  });
  it('A função getOpeningHours deve retornar um erro quando passado o parâmetro de hora errado', () => {
    const actual = () => getOpeningHours('Wednesday', '13:00-AM');
    const expected = 'The hour must be between 0 and 12';
    expect(actual).toThrowError(expected);
  });
  it('A função getOpeningHours deve retornar um erro quando passado o parâmetro de minutos errado', () => {
    const actual = () => getOpeningHours('Wednesday', '10:93-AM');
    const expected = 'The minutes must be between 0 and 59';
    expect(actual).toThrowError(expected);
  });
  it('A função getOpeningHours deve retornar um erro quando passado o parâmetro de abreviação errado', () => {
    const actual = () => getOpeningHours('Wednesday', '10:23-FM');
    const expected = 'The abbreviation must be \'AM\' or \'PM\'';
    expect(actual).toThrowError(expected);
  });
  it('A função getOpeningHours deve retornar um erro quando passado o parâmetro de um dia inválido', () => {
    const actual = () => getOpeningHours('ChuchuBeleza', '10:23-AM');
    const expected = 'The day must be valid. Example: Monday';
    expect(actual).toThrowError(expected);
  });
  it('A função getOpeningHours deve retornar um erro quando passado um não-número como parâmetro de hora', () => {
    const actual = () => getOpeningHours('Sunday', 'nine:11-AM');
    const expected = 'The hour should represent a number';
    expect(actual).toThrowError(expected);
  });
  it('A função getOpeningHours deve retornar um erro quando passado um não-número como parâmetro de minutos', () => {
    const actual = () => getOpeningHours('Sunday', '09:eleven-AM');
    const expected = 'The minutes should represent a number';
    expect(actual).toThrowError(expected);
  });
});
