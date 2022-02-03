const ProductClient = require('./product_client');
class ProductService {
  constructor() {
    // 필요한 것을 외부에서 받아오지 않고, 내부적으로 직접 만들어 사용하므로 DI 원칙에 어긋남
    this.productClient = new ProductClient();
  }

  fetchAvailableItems() {
    return this.productClient.fetchItems().then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
