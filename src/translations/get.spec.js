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
import { get } from './get';
import { RESOURCE_NAME } from './constants';

const URL = 'url';
const PATHNAME = 'pathname';
const websiteId = '🕸';
const languageCode = '🈹';

getUrl.mockImplementation(() => URL);
getPathname.mockImplementation(() => PATHNAME);

describe(`GET translations`, () => {
  beforeAll(() => {
    get(websiteId, languageCode);
  });

  it('should call `getPathname` with the correct arguments', () => {
    expect(getPathname).toHaveBeenCalledWith(websiteId, languageCode);
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

  it('should call `setFunctionName` with the right arguments', () => {
    expect(setFunctionName).toHaveBeenCalledWith(get, RESOURCE_NAME);
  });
});
