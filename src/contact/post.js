import { postForm } from '../utils/postForm';
import { setFunctionName } from '../utils/setFunctionName';

import { PATHNAME_TEMPLATE, RESOURCE_NAME } from './constants';
import { adaptFormValues } from './utils/adaptFormValues';

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

setFunctionName(post, RESOURCE_NAME);
