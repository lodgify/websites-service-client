jest.mock('@lodgify/get-query-string');
jest.mock('@lodgify/fetch-related-utils');
jest.mock('./utils/getPathname');
jest.mock('../utils/getUrl');

import {
  getJSON,
  // eslint-disable-next-line import/named
  getJSONReturnValue,
} from '@lodgify/fetch-related-utils';
import { getQueryString } from '@lodgify/get-query-string';

import { ORIGIN } from '../constants';
import { getUrl } from '../utils/getUrl';

import { getPathname } from './utils/getPathname';
import { get } from './get';

const propertyId = 123;
const websiteId = 456;
const roomTypeId = 897;

const startDate = '2018-12-1';
const numberOfGuests = '1';
const numberOfMonths = '4';

const PATHNAME = 'parthnayeem';
const QUERY = 'some query';
const URL = 'some url';

getPathname.mockImplementation(() => PATHNAME);
getQueryString.mockImplementation(() => QUERY);
getUrl.mockImplementation(() => URL);

describe(`GET availability`, () => {
  beforeAll(() => {
    get(
      startDate,
      numberOfGuests,
      numberOfMonths,
      websiteId,
      propertyId,
      roomTypeId
    );
  });

  it('should call `getPathname` with the correct arguments', () => {
    expect(getPathname).toHaveBeenCalledWith(websiteId, propertyId, roomTypeId);
  });

  it('should call `getQueryString` with the correct arguments', () => {
    expect(getQueryString).toHaveBeenCalledWith({
      startDate,
      guests: numberOfGuests,
      months: numberOfMonths,
    });
  });

  it('should call `getUrl` with the correct arguments', () => {
    expect(getUrl).toHaveBeenCalledWith(ORIGIN, PATHNAME, QUERY);
  });

  it('should call `getJSON` with the correct arguments', () => {
    expect(getJSON).toHaveBeenCalledWith(URL);
  });

  it('should return whatever `getJSON` returns', () => {
    const actual = get();

    expect(actual).toBe(getJSONReturnValue);
  });
});
