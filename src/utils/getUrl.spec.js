import { getUrl } from './getUrl';

describe(`getUrl`, () => {
  it('should return the right string', () => {
    const origin = 'oreegin';
    const pathname = 'parthnayeeem';
    const queryString = 'queeryStringuuu';
    const actual = getUrl(origin, pathname, queryString);

    expect(actual).toBe(`${origin}${pathname}${queryString}`);
  });

  describe('if queryString is unused', () => {
    it('should only return the origin and pathname', () => {
      const origin = 'oreegin';
      const pathname = 'parthnayeeem';
      const actual = getUrl(origin, pathname);

      expect(actual).toBe(`${origin}${pathname}`);
    });
  });
});
