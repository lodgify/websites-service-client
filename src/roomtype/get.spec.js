jest.mock('@lodgify/fetch-related-utils');
jest.mock('./utils/getPathname');
jest.mock('../utils/getUrl');

import {
  getJSON,
  // eslint-disable-next-line import/named
  getJSONReturnValue,
} from '@lodgify/fetch-related-utils';

import { ORIGIN } from '../constants';
import { getUrl } from '../utils/getUrl';

import { getPathname } from './utils/getPathname';
import { get } from './get';

const PATHNAME = 'parthnayeem';
const URL = 'url';
const propertyId = 123;

getPathname.mockImplementation(() => PATHNAME);
getUrl.mockImplementation(() => URL);

describe(`GET roomtype`, () => {
  beforeAll(() => {
    get(propertyId);
  });

  it('should call `getPathname` with the correct arguments', () => {
    expect(getPathname).toHaveBeenCalledWith(propertyId);
  });

  it('should call `getUrl` with the correct arguments', () => {
    expect(getUrl).toHaveBeenCalledWith(ORIGIN, PATHNAME);
  });

  it('should call `getJSON` with the correct arguments', () => {
    expect(getJSON).toHaveBeenCalledWith(URL);
  });

  it('should return whatever `getJSON` returns', () => {
    const actual = get();

    expect(actual).toBe(getJSONReturnValue);
  });
});
