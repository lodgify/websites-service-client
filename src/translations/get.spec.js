jest.mock('@lodgify/fetch-helpers');
jest.mock('../utils/getUrl');
jest.mock('./utils/getPathname');

import {
  getJSON,
  // eslint-disable-next-line import/named
  getJSONReturnValue,
} from '@lodgify/fetch-helpers';

import { ORIGIN } from '../constants';
import { getUrl } from '../utils/getUrl';

import { getPathname } from './utils/getPathname';
import { get } from './get';

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
});
