import * as helloWorldModule   from '../functions/helloWorld';


describe('', () => {
  it('asdasd', () => {
    const mockedWorldFunction = jest.spyOn(helloWorldModule, 'world');
    mockedWorldFunction.mockReturnValue('mockedWorld');
    const result = helloWorldModule.hello();
    expect(result).toBe('Hello mockedWorld');
  });
});