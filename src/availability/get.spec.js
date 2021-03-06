jest.mock('@lodgify/get-query-string');
jest.mock('@lodgify/fetch-helpers');
jest.mock('./utils/getPathname');
jest.mock('../utils/getUrl');
jest.mock('../utils/setFunctionName');

import {
  getJSON,
  // eslint-disable-next-line import/named
  getJSONReturnValue,
} from '@lodgify/fetch-helpers';
import { getQueryString } from '@lodgify/get-query-string';

import { ORIGIN } from '../constants';
import { getUrl } from '../utils/getUrl';
import { setFunctionName } from '../utils/setFunctionName';

import { getPathname } from './utils/getPathname';
import { get } from './get';
import { RESOURCE_NAME } from './constants';

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

  it('should call `setFunctionName` with the right arguments', () => {
    expect(setFunctionName).toHaveBeenCalledWith(get, RESOURCE_NAME);
  });
});
