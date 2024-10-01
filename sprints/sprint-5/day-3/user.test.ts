export const user = {
  sayHello: () => {
    return 'hello';
  },
};

describe.skip('user', () => {
  beforeAll(() => {
    console.log('beforeAll');
  });
  beforeEach(() => {
    console.log('beforeEach');
    jest.clearAllMocks();
  });

  afterAll(() => {
    console.log('afterAll');
  });
  afterEach(() => {
    console.log('afterEach');
  });

  test('user should say hello', () => {
    expect(user.sayHello()).toBe('hello');
  });
  test('user sayHello should be Called', () => {
    const spy = jest.spyOn(user, 'sayHello');
    user.sayHello();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
