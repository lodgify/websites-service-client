import { getQueryString } from '@lodgify/get-query-string';
import { getJSON } from '@lodgify/fetch-related-utils';

import { ORIGIN } from '../constants';
import { getUrl } from '../utils/getUrl';

import { getPathname } from './utils/getPathname';

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
