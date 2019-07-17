jest.mock('@lodgify/fetch-helpers');
jest.mock('../utils/getUrl');
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

import { getPathname } from './utils/getPathname';
import { RESOURCE_NAME } from './constants';
import { get } from './get';

const websiteId = 176;

const PATHNAME = 'some pathname';
const URL = 'url';

getPathname.mockImplementation(() => PATHNAME);
getUrl.mockImplementation(() => URL);

describe(`GET locations`, () => {
  it('should call `getPathname` with the correct arguments', () => {
    get(websiteId);

    expect(getPathname).toHaveBeenCalledWith(websiteId);
  });

  it('should call `getUrl` with the correct arguments', () => {
    get();

    expect(getUrl).toHaveBeenCalledWith(ORIGIN, PATHNAME);
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
