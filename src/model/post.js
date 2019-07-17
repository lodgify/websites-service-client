import { postJSON } from '@lodgify/fetch-helpers';

import { ORIGIN } from '../constants';
import { getUrl } from '../utils/getUrl';
import { setFunctionName } from '../utils/setFunctionName';

import { PATHNAME, RESOURCE_NAME } from './constants';
import { getAdaptedPath } from './utils/getAdaptedPath';
import { getAdaptedHost } from './utils/getAdaptedHost';

/**
 * @param  {string} host
 * @param  {string} path
 * @param  {string} cookie
 * @return {Promise}
 */
export const post = (host, path, cookie) => {
  const url = getUrl(ORIGIN, PATHNAME);
  const adaptedPath = getAdaptedPath(path);
  const adaptedHost = getAdaptedHost(host);

  return postJSON(
    url,
    {
      host: adaptedHost,
      path: adaptedPath,
    },
    { Cookie: cookie }
  );
};

setFunctionName(post, RESOURCE_NAME);
