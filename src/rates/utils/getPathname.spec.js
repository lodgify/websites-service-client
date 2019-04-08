import { PATHNAME_TEMPLATE } from '../constants';

import { getPathname } from './getPathname';

const websiteId = 321;
const propertyId = 123;
const roomTypeId = 987;

describe(`${PATHNAME_TEMPLATE} getPathname`, () => {
  describe('if `propertyId` is not defined', () => {
    it('should return the right string', () => {
      const actual = getPathname(websiteId);

      expect(actual).toBe('/v2/websites/rates/website/321');
    });
  });

  describe('if `roomTypeId` is not defined', () => {
    it('should return the right string', () => {
      const actual = getPathname(websiteId, propertyId);

      expect(actual).toBe('/v2/websites/rates/website/321/property/123');
    });
  });

  describe('by default', () => {
    it('should return the right string', () => {
      const actual = getPathname(websiteId, propertyId, roomTypeId);

      expect(actual).toBe(
        '/v2/websites/rates/website/321/property/123/roomtype/987'
      );
    });
  });
});
