import { getJSON } from '@lodgify/isomorphic-fetch-helpers';

import { ORIGIN } from '../../constants';
import { getUrl } from '../utils/getUrl';
import { setFunctionName } from '../utils/setFunctionName';

import { getPathname } from './utils/getPathname';
import { RESOURCE_NAME } from './constants';

/**
 * @param  {string} imageGuid
 * @return {Promise}
 */
export const get = imageGuid => {
  const pathname = getPathname(imageGuid);
  const url = getUrl(ORIGIN, pathname);

  return getJSON(url);
};

setFunctionName(get, RESOURCE_NAME);
