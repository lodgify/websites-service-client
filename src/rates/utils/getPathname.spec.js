import { PATHNAME_TEMPLATE } from '../constants';

import { getPathname } from './getPathname';

const websiteId = 321;
const propertyId = 123;
const languageCode = 'en';

describe(`${PATHNAME_TEMPLATE} getPathname`, () => {
  describe('if `propertyId` and `languageCode` are defined', () => {
    it('should return the right string', () => {
      const actual = getPathname(websiteId, languageCode, propertyId);

      expect(actual).toBe(
        '/v2/websites/rates/website/321/language/en/property/123'
      );
    });
  });

  describe('by default', () => {
    it('should return the right string', () => {
      const actual = getPathname(websiteId);

      expect(actual).toBe('/v2/websites/rates/website/321');
    });
  });
});
