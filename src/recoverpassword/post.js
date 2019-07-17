import { setFunctionName } from '../utils/setFunctionName';
import { postForm } from '../utils/postForm';

import { PATHNAME_TEMPLATE, RESOURCE_NAME } from './constants';

/**
 * @param  {number} websiteId
 * @param  {Object} formValues
 * @return {Promise}
 */
export const post = (websiteId, formValues) =>
  postForm(PATHNAME_TEMPLATE, websiteId, formValues);

setFunctionName(post, RESOURCE_NAME);
