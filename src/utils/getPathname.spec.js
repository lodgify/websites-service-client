import { getPathname } from './getPathname';

const websiteId = 321;
const pathnameTemplate = 'yo/bro/:websiteId';

describe(`getPathname`, () => {
  describe('by default', () => {
    it('should return the right string', () => {
      const actual = getPathname(pathnameTemplate, websiteId);

      expect(actual).toBe('yo/bro/321');
    });
  });
});
