import { getJSON } from '@lodgify/fetch-helpers';

import { ORIGIN } from '../constants';
import { getUrl } from '../utils/getUrl';

import { getPathname } from './utils/getPathname';

/**
 * @param  {number}   websiteId
 * @return {Promise}
 */
export const get = websiteId => {
  const pathname = getPathname(websiteId);
  const url = getUrl(ORIGIN, pathname);

  return getJSON(url);
};
