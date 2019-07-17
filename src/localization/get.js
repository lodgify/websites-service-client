import { getJSON } from '@lodgify/fetch-helpers';

import { ORIGIN } from '../constants';
import { getUrl } from '../utils/getUrl';
import { setFunctionName } from '../utils/setFunctionName';

import { PATHNAME, RESOURCE_NAME } from './constants';

/**
 * @return {Promise}
 */
export const get = () => {
  const url = getUrl(ORIGIN, PATHNAME);

  return getJSON(url);
};

setFunctionName(get, RESOURCE_NAME);
