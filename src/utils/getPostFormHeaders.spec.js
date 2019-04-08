import { getPostFormHeaders } from './getPostFormHeaders';

describe(`getPostFormHeaders`, () => {
  describe('if `reCaptchaToken` is a string', () => {
    it('should return the right object', () => {
      const reCaptchaToken = '🔴';
      const actual = getPostFormHeaders(reCaptchaToken);

      expect(actual).toEqual({
        recaptcha: reCaptchaToken,
      });
    });
  });

  describe('if `reCaptchaToken` is `undefined`', () => {
    it('should return the right object', () => {
      const actual = getPostFormHeaders();

      expect(actual).toEqual({});
    });
  });
});
