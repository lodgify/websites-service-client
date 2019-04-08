import { setFunctionName } from './setFunctionName';

describe('setFunctionName', () => {
  it('should set the right name on the function', () => {
    const func = () => {};
    const resourceName = 'someResourceName';

    setFunctionName(func, resourceName);

    expect(func.name).toBe('funcSomeResourceName');
  });
});
