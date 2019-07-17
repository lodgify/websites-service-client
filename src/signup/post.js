import { postForm } from '../utils/postForm';
import { setFunctionName } from '../utils/setFunctionName';

import { PATHNAME_TEMPLATE, RESOURCE_NAME } from './constants';

/**
 * @param  {number} websiteId
 * @param  {Object} formValues
 * @param  {string} reCaptchaToken
 * @return {Promise}
 */
export const post = (websiteId, formValues, reCaptchaToken) =>
  postForm(PATHNAME_TEMPLATE, websiteId, formValues, reCaptchaToken);

setFunctionName(post, RESOURCE_NAME);
