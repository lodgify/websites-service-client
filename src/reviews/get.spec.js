jest.mock('@lodgify/fetch-helpers');
jest.mock('../utils/getUrl');
jest.mock('./utils/getQueryString');
jest.mock('./utils/getPathname');
jest.mock('../utils/setFunctionName');

import {
  getJSON,
  // eslint-disable-next-line import/named
  getJSONReturnValue,
} from '@lodgify/fetch-helpers';

import { ORIGIN } from '../constants';
import { getUrl } from '../utils/getUrl';
import { setFunctionName } from '../utils/setFunctionName';

import { getQueryString } from './utils/getQueryString';
import { getPathname } from './utils/getPathname';
import { get } from './get';
import { RESOURCE_NAME } from './constants';

const websiteId = 176;
const propertyId = 198;
const page = 300;
const count = 400;

const QUERY_STRING = 'some query string';
const PATHNAME = 'some pathname';
const URL = 'url';

getQueryString.mockImplementation(() => QUERY_STRING);
getPathname.mockImplementation(() => PATHNAME);
getUrl.mockImplementation(() => URL);

describe(`GET reviews`, () => {
  describe('if `optionalParams` are not passed', () => {
    it('should call `getQueryString` with the right arguments', () => {
      const testCases = [undefined, {}];

      testCases.forEach(testCase => {
        getQueryString.mockClear();
        get(websiteId, propertyId, testCase);

        expect(getQueryString).toHaveBeenCalledWith(1, 100);
      });
    });
  });

  describe('if `optionalParams` are passed', () => {
    it('should call `getQueryString` with the right arguments', () => {
      getQueryString.mockClear();
      get(websiteId, propertyId, { page, count });

      expect(getQueryString).toHaveBeenCalledWith(page, count);
    });
  });

  it('should call `getPathname` with the correct arguments', () => {
    get(websiteId, propertyId);

    expect(getPathname).toHaveBeenCalledWith(websiteId, propertyId);
  });

  it('should call `getUrl` with the correct arguments', () => {
    get();

    expect(getUrl).toHaveBeenCalledWith(ORIGIN, PATHNAME, QUERY_STRING);
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
