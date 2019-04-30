import { getAdaptedHost } from './getAdaptedHost';

describe('utils/getAdaptedHost', () => {
  describe('if `host` includes `localhost:`', () => {
    it('should return the right string', () => {
      const actual = getAdaptedHost('something.localhost:8080');

      expect(actual).toBe('something.lodgifyintegration.com');
    });
  });

  describe('if `host` does not include `localhost:`', () => {
    it('should return the right string', () => {
      const actual = getAdaptedHost('something.lodgify.com');

      expect(actual).toBe('something.lodgify.com');
    });
  });
});
