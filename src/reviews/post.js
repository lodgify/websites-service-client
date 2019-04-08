import { postJSON } from '@lodgify/fetch-related-utils';

import { ORIGIN } from '../constants';
import { getUrl } from '../utils/getUrl';

import { getPathname } from './utils/getPathname';

/**
 * @param  {number} websiteId
 * @param  {number} propertyId
 * @param  {Object} formValues
 * @return {Promise}
 */
export const post = (websiteId, propertyId, formValues) => {
  const pathname = getPathname(websiteId, propertyId);
  const url = getUrl(ORIGIN, pathname);

  return postJSON(url, formValues);
};
