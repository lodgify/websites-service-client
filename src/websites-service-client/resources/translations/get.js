import { getJSON } from '@lodgify/isomorphic-fetch-helpers';

import { ORIGIN } from '../../constants';
import { getUrl } from '../utils/getUrl';

import { getPathname } from './utils/getPathname';

/**
 * @param  {number} websiteId
 * @param  {string} language
 * @return {Promise}
 */
export const get = (websiteId, language) => {
  const pathName = getPathname(websiteId, language);
  const url = getUrl(ORIGIN, pathName);

  return getJSON(url);
};
