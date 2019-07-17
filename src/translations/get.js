import { getJSON } from '@lodgify/fetch-helpers';

import { ORIGIN } from '../constants';
import { getUrl } from '../utils/getUrl';
import { setFunctionName } from '../utils/setFunctionName';

import { getPathname } from './utils/getPathname';
import { RESOURCE_NAME } from './constants';

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

setFunctionName(get, RESOURCE_NAME);
