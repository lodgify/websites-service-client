import { PATHNAME_TEMPLATE } from './constants';
import { adaptFormValues } from './utils/adaptFormValues';
import { postForm } from './../utils/postForm';
/**
 * @param  {number} websiteId
 * @param  {Object} formValues
 * @param  {string} reCaptchaToken
 * @return {Promise}
 */
export const post = (websiteId, formValues, reCaptchaToken) =>
  postForm(
    PATHNAME_TEMPLATE,
    websiteId,
    adaptFormValues(formValues),
    reCaptchaToken
  );
