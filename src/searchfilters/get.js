import { getJSON } from '@lodgify/fetch-helpers';

import { ORIGIN } from '../constants';
import { getUrl } from '../utils/getUrl';
import { setFunctionName } from '../utils/setFunctionName';

import { RESOURCE_NAME } from './constants';
import { getPathname } from './utils/getPathname';

/**
 * @param  {number} websiteId
 * @return {Promise}
 */
export const get = websiteId => {
  const pathName = getPathname(websiteId);
  const url = getUrl(ORIGIN, pathName);

  return getJSON(url);
};

setFunctionName(get, RESOURCE_NAME);
