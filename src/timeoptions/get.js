import { getJSON } from '@lodgify/fetch-related-utils';

import { ORIGIN } from '../constants';
import { getUrl } from '../utils/getUrl';

import { PATHNAME } from './constants';

/**
 * @return {Promise}
 */
export const get = () => {
  const url = getUrl(ORIGIN, PATHNAME);

  return getJSON(url);
};
