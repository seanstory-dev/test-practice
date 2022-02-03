const ProductService = require('../product_service_no_di.js');
const ProductClient = require('../product_client.js');
jest.mock('../product_client');

// ProductService는 ProductClient 모듈에 의존하고 있으므로 mock을 이용해서 의존하지 않도록 만들어주어 독립적인 유닛 테스트가 가능하도록 한다.
describe('ProductService', () => {
  let productService;
  const fetchItems = jest.fn(async () => [
    { item: '🥛', available: true },
    { item: '🍌', available: false },
  ]);

  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });

  beforeEach(() => {
    productService = new ProductService();
  });

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: '🥛', available: true }]);
  });

  it('fetchItems should be called only once', async () => {
    await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1); // jest.config.js에서 clearMocks를 true로 설정해두어서 각각의 테스트 수행이 끝날 때마다 mock이 초기화되기 때문
    // 자동이 아닌 수동으로 mock을 초기화하려면 mockClear 함수를 사용한다.
  });
});
