# test-practice

테스트 연습

## Test Pyramid

- 단위 테스트에서 E2E 테스트로 갈수록 개발비용, 운영비용이 더 든다.
- 테스트 실행 속도도 E2E 테스트로 갈수록 더 느리다.

### 단위 테스트

- 주로 독립적인 하나의 함수, 모듈, 클래스를 테스트
- 자동차 바퀴 하나

![wheel](https://media4.giphy.com/media/FVAvmLbptzZpC/giphy.gif?cid=ecf05e47rgyw53ry9wa3wgydjrzt0p0pzfcfaev3o054l3h3&rid=giphy.gif&ct=g)

### 통합 테스트

- 모듈들, 클래스들의 유기적인 상호작용을 테스트
- 자동차 바퀴 4개가 유기적으로 잘 굴러가는지

### E2E 테스트

- UI, 사용자 테스트
- 자동차 전체

## TDD

- 개발 코드 작성 전 테스트 코드를 먼저 작성
- 요구사항에 대한 철저한 분석과 이해가 필요
- 사용자 입장에서 코드를 작성(구현보다는 인터페이스에 집중)
- 모든 테스트 코드가 통과했다면 자신있게 리팩토링이 가능
- 좋은 문서화 효과를 가진다.

> TDD를 하는지는 중요하지 않지만 코드 리뷰를 요청하거나 메인 리포지토리에 머지하거나 사용자에게 배포하기 위해서는 꼭 코드에 해당하는 테스트 코드를 포함해야 한다는 것이다.
> 그래서 내가 작성한 코드에는 버그가 없고, 기존 코드에도 나쁜 영향을 주지 않았다는 사실을 증명해야 한다.

### TDD를 사용하는 경우

- 요구사항이 명확할 때
- 비즈니스 로직
- 협업시 명세서(문서) 역할
- 설계에 대한 고민이 필요할 때

### TDD를 사용하지 않는 경우

- UI(컴포넌트)를 작성하는 경우

## CI/CD

### Continuous Integration

- 코드 변경사항을 주기적으로 빈번하게 머지해야 한다.
- 통합을 위한 단계인 빌드, 테스트, 머지를 자동화
- 문제점을 빠르게 발견할 수 있다.
- 코드 퀄리티를 향상시킬 수 있다.

### Continuous Delivery | Deployment

- 검증 팀이 최종적으로 배포되기 전에 수동적으로 검증하는 단계를 거치는 경우는 Delivery
- 최종 단계까지 자동화해 둔 경우는 Deployment

### 종류

- Jenkins
- BuildKite
- GitHub Actions

## 단위 테스트

- 테스트를 수행한 뒤 결과를 보고하는 Test Runner
- 테스트 코드 내에서 조건, 비교를 통한 테스트 로직을 작성하는 Assertion
- 예전에는 Test Runner에 해당하는 라이브러리(대표적으로 Mocha)와 Assertion에 해당하는 라이브러리(대표적으로 Chai)가 따로 있었지만 요즘에는 [Jest](https://jestjs.io/docs/getting-started) 라이브러리 하나면 된다.

> 에러, 비동기, DI 관련 케이스에서 Mock을 사용할지, Stub를 사용할지 등 자세한 테스트 케이스는 공식문서의 가이드를 통해 학습하자!

## 좋은 테스트 원칙

1. 한번 작성된 테스트 코드는 영원히 유지보수해야 한다.
2. 사용자 입장에서 API만을 가지고 테스트해야 한다. 내부 구현 사항을 테스트하면 구현 사항을 조금만 변경해도 테스트가 실패할 수 있어 오히려 비효율적이다.
3. 반복되는 테스트 코드는 별도의 함수나 클래스로 만들어 재사용성을 높인다.
4. 테스트 코드는 배포용 코드와 철저히 분리한다.
5. 테스트 코드는 곧 문서화이다.

### 테스트 구조

- beforeAll
- beforeEach
- 테스트
  - 준비(Arrange, Given)
  - 실행(Act, When)
  - 검증(Assert, Then)
- afterEach
- afterAll

### FIRST 테스트 원칙

- Fast - (파일, 데이터베이스, 네트워크 등) 느린 것에 대한 의존성 낮추기 -> mock, stub
- Isolated - 최소한의 유닛으로 테스트를 독립적이고 집중적으로 유지하기
- Repeatable - 실행할 때마다 동일한 결과를 유지하기 -> 외부 환경에 영향을 받지 않도록 작성하여야 함
- Self-Validating - 스스로 결과를 검증하기 -> Jest를 사용하면 충족, CI/CD 자동화를 통한 검증
- Timely - 시기적절하게 테스트 코드를 작성하기 -> 사용자에게 배포되기 이전에 작성하여야 함

### 무엇을 테스트해야 할지 모를 때 - Right-BICEP

- 모든 요구사항이 정상 동작하는지 확인
- Boundary conditions - 모든 코너 케이스(인풋)에 대해 테스트 -> CORRECT 원칙 참고
- Inverse relationship - 역관계를 이용해서 결과값을 확인
- Cross-check - 다른 수단을 이용해서 결과값이 맞는지 확인
- Error Conditions - 불행한 경로에 대해 우아하게 처리하는지 확인(네트워크 에러, 메모리 부족, 데이터베이스 중지)
- Performance characteristics - 성능 확인은 테스트를 통해 정확한 수치로 확인

### 좋은 테스트의 커버리지 - CORRECT

- Conformance - 특정 포맷을 준수
- Ordering - 순서
- Range - 범위
- Reference - 외부 의존성 유무, 특정한 조건의 유무
- Existence - 값이 존재하지 않을 때
- Cardinality - 0-1-N 법칙에 따라 검증
- Time - 시간
