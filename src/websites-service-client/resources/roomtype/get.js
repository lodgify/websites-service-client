import { getJSON } from '@lodgify/isomorphic-fetch-helpers';

import { ORIGIN } from '../../constants';
import { getUrl } from '../utils/getUrl';

import { getPathname } from './utils/getPathname';

/**
 * @param  {number}   propertyId
 * @return {Promise}
 */
export const get = propertyId => {
  const pathname = getPathname(propertyId);
  const url = getUrl(ORIGIN, pathname);

  return getJSON(url);
};
