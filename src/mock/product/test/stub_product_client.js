// Stub은 기존에 사용되는 인터페이스를 모두 충족하는 실제로 구현된 대체 가능한, 재사용 가능한 코드
class StubProductClient {
  async fetchItems() {
    return [
      { item: '🥛', available: true },
      { item: '🍌', available: false },
    ];
  }
}

module.exports = StubProductClient;
