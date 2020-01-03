import { getPathname } from './getPathname';

describe('`getPathname`', () => {
  describe('by default', () => {
    it('should return the correct string', () => {
      const actual = getPathname('lol', 'rofl');

      expect(actual).toEqual('/v2/websites/payments/website/lol/property/rofl');
    });
  });

  describe('if languageCode is passed', () => {
    it('should return the correct string', () => {
      const actual = getPathname('lol', 'rofl', 'mao');

      expect(actual).toEqual(
        '/v2/websites/payments/website/lol/property/rofl/language/mao'
      );
    });
  });
});
