import { getJSON } from '@lodgify/fetch-related-utils';

import { ORIGIN } from '../../constants';
import { getUrl } from '../utils/getUrl';

import { getPathname } from './utils/getPathname';

/**
 * @param  {number} websiteId
 * @param  {number} propertyId
 * @return {Promise}
 */
export const get = (websiteId, propertyId) => {
  const pathName = getPathname(websiteId, propertyId);
  const url = getUrl(ORIGIN, pathName);

  return getJSON(url);
};
