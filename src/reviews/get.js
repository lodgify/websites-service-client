import { getJSON } from '@lodgify/fetch-related-utils';

import { ORIGIN } from '../../constants';
import { getUrl } from '../utils/getUrl';
import { setFunctionName } from '../utils/setFunctionName';

import { getPathname } from './utils/getPathname';
import { getQueryString } from './utils/getQueryString';
import { RESOURCE_NAME } from './constants';

/**
 * @param {number} websiteId
 * @param {number} propertyId
 * @param {Object} [optionalParams={}]
 * @param {number} [optionalParams.page=1]
 * @param {number} [optionalParams.count=100]
 * @return {Promise}
 */
export const get = (websiteId, propertyId, { page = 1, count = 100 } = {}) => {
  const queryString = getQueryString(page, count);
  const pathname = getPathname(websiteId, propertyId);

  const url = getUrl(ORIGIN, pathname, queryString);

  return getJSON(url);
};

setFunctionName(get, RESOURCE_NAME);
