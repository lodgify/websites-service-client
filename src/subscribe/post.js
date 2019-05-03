import { postJSON } from '@lodgify/fetch-helpers';

import { ORIGIN } from '../constants';
import { getUrl } from '../utils/getUrl';

import { getPathname } from './utils/getPathname';
import { PATHNAME_TEMPLATE } from './constants';

/**
 * @param  {number} websiteId
 * @param  {string} language
 * @param  {Object} formValues
 * @return {Promise}
 */
export const post = (websiteId, language, formValues) => {
  const pathname = getPathname(PATHNAME_TEMPLATE, websiteId, language);
  const url = getUrl(ORIGIN, pathname);

  return postJSON(url, formValues);
};
