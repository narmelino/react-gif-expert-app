import getGifs from '../../utils/getGifs';

describe('Pruebas de getGifs', () => {
  test('Debe traer 10 elementos', (done) => {
    getGifs('Goku').then(gifs => {
      expect(gifs.length).toBe(10);
      done();
    });
  });

  test('Debe traer 0 elementos si no se envía la categoría.', async() => {
    const gifs = await getGifs('')
    expect(gifs.length).toBe(0);
  });
});