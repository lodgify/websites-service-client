import { getJSON } from '@lodgify/fetch-helpers';

import { ORIGIN } from '../constants';
import { getUrl } from '../utils/getUrl';
import { setFunctionName } from '../utils/setFunctionName';

import { getPathname } from './utils/getPathname';
import { RESOURCE_NAME } from './constants';

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

setFunctionName(get, RESOURCE_NAME);
