const fetchMilk = require('../async');

describe('Async', () => {
  // 방법 1
  it('async-done', (done) => {
    fetchMilk().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 2000 });
      done();
    });
  });

  // 방법 2 - 더 나은 방법
  it('async-return', () => {
    return fetchMilk().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 2000 });
    });
  });

  // 방법 3 - 더 나은 방법
  it('async-await', async () => {
    const milk = await fetchMilk();
    expect(milk).toEqual({ item: 'Milk', price: 2000 });
  });

  // 방법 4 - 더 나은 방법
  it('async-resolves', () => {
    return expect(fetchMilk()).resolves.toEqual({
      item: 'Milk',
      price: 2000,
    });
  });
  it('async-rejects', () => {
    return expect(fetchMilk('error')).rejects.toBe('Network error');
  });
});
