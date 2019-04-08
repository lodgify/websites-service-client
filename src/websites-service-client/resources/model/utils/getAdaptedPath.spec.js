import { getAdaptedPath } from './getAdaptedPath';

describe('utils/getAdaptedPath', () => {
  it('should return the correct path', () => {
    const path = '/en/1234/map';

    const actual = getAdaptedPath(path);

    expect(actual).toBe('/en/1234');
  });
});
