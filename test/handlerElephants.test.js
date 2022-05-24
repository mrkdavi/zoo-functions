const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('handlerElephants deve retornar undefined quando não passado nenhum parâmetro', () => {
    const actual = handlerElephants();
    expect(actual).toBeUndefined();
  });
  it('handlerElephants deve retornar uma string quando o parâmetro passado não for uma string', () => {
    const actual = handlerElephants(3);
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toMatch(expected);
  });
  it('handlerElephants deve retornar a localização dos elefantes quando o parâmetro passado for \'location\'', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toMatch(expected);
  });
  it('handlerElephants deve retornar a popularidade dos elefantes quando passado o parâmetro \'popularity\'', () => {
    const actual = handlerElephants('popularity');
    const expected = 5;
    expect(actual).toBe(expected);
  });
  it('handlerElephants deve retornar a idade media dos elefantes quando passado o parâmetro \'averageAge\'', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toBeCloseTo(expected);
  });
  it('handlerElephants deve retornar o número de elefantes residentes quando passado o parâmetro \'count\'', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toBeCloseTo(expected);
  });
  it('handlerElephants deve retornar o names dos elefantes residentes quando passado o parâmetro \'names\'', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toEqual(expected);
  });
  it('handlerElephants deve retornar os dias disponíveis para visitar os elefantes quando passado o parâmetro \'availability\'', () => {
    const actual = handlerElephants('availability');
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(actual).toEqual(expected);
  });
  it('handlerElephants deve retornar null quando passado um parâmetro não esperado', () => {
    const actual = handlerElephants('abobrinha');
    expect(actual).toBeNull();
  });
});
