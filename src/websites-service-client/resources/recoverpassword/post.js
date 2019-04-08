import { postForm } from './../utils/postForm';
import { PATHNAME_TEMPLATE } from './constants';

/**
 * @param  {number} websiteId
 * @param  {Object} formValues
 * @return {Promise}
 */
export const post = (websiteId, formValues) =>
  postForm(PATHNAME_TEMPLATE, websiteId, formValues);
