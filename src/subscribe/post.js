import { postJSON } from '@lodgify/fetch-helpers';

import { ORIGIN } from '../constants';
import { getUrl } from '../utils/getUrl';
import { setFunctionName } from '../utils/setFunctionName';

import { getPathname } from './utils/getPathname';
import { PATHNAME_TEMPLATE, RESOURCE_NAME } from './constants';

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

setFunctionName(post, RESOURCE_NAME);
