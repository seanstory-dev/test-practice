const UserService = require('../user_service');
const UserClient = require('../user_client');
jest.mock('../user_client');

// 호출 여부 같이 행동을 테스트하는 경우에는 mock을 이용한다.
describe('UserService', () => {
  const login = jest.fn(async () => 'success');
  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });
  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
    // login.mockClear();
    // UserClient.mockClear();
  });

  it('call login on UserClient when tries to login', async () => {
    await userService.login('sean', 1234);
    expect(login.mock.calls.length).toBe(1);
  });

  it('should not call login on UserClient again if already logged in', async () => {
    await userService.login('sean', 1234);
    await userService.login('sean', 1234);

    expect(login.mock.calls.length).toBe(1);
  });
});
