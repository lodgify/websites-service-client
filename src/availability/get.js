import { getQueryString } from '@lodgify/get-query-string';
import { getJSON } from '@lodgify/fetch-helpers';

import { ORIGIN } from '../constants';
import { getUrl } from '../utils/getUrl';
import { setFunctionName } from '../utils/setFunctionName';

import { getPathname } from './utils/getPathname';
import { RESOURCE_NAME } from './constants';

/**
 * @param  {string}   startDate
 * @param  {number}   numberOfGuests
 * @param  {number}   numberOfMonths
 * @param  {number}   websiteId
 * @param  {number}   propertyId
 * @param  {number}   roomTypeId
 * @return {Promise}
 */
export const get = (
  startDate,
  numberOfGuests,
  numberOfMonths,
  websiteId,
  propertyId,
  roomTypeId
) => {
  const pathname = getPathname(websiteId, propertyId, roomTypeId);
  const queryString = getQueryString({
    startDate,
    guests: numberOfGuests,
    months: numberOfMonths,
  });
  const url = getUrl(ORIGIN, pathname, queryString);

  return getJSON(url);
};

setFunctionName(get, RESOURCE_NAME);
