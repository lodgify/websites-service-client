import { postJSON } from '@lodgify/fetch-related-utils';

import { ORIGIN } from '../../constants';
import { getUrl } from '../utils/getUrl';

import { PATHNAME } from './constants';
import { getAdaptedPath } from './utils/getAdaptedPath';
import { getAdaptedHost } from './utils/getAdaptedHost';

/**
 * @param  {string} host
 * @param  {string} path
 * @return {Promise}
 */
export const post = (host, path) => {
  const url = getUrl(ORIGIN, PATHNAME);
  const adaptedPath = getAdaptedPath(path);
  const adaptedHost = getAdaptedHost(host);

  return postJSON(url, {
    host: adaptedHost,
    path: adaptedPath,
  });
};
