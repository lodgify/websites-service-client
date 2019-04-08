/**
 * @param  {string} reCaptchaToken
 * @return {Object}
 */
export const getPostFormHeaders = reCaptchaToken =>
  reCaptchaToken
    ? {
        recaptcha: reCaptchaToken,
      }
    : {};
