jest.mock('@lodgify/fetch-related-utils');
jest.mock('../utils/getUrl');
jest.mock('../utils/setFunctionName');

import {
  getJSON,
  // eslint-disable-next-line import/named
  getJSONReturnValue,
} from '@lodgify/fetch-related-utils';

import { ORIGIN } from '../constants';
import { getUrl } from '../utils/getUrl';
import { setFunctionName } from '../utils/setFunctionName';

import { getPathname } from './utils/getPathname';
import { get } from './get';
import { RESOURCE_NAME } from './constants';

const URL = 'url';

getUrl.mockImplementation(() => URL);

const websiteId = '321';
const languageCode = 'en';

describe(`GET promotion`, () => {
  beforeAll(() => {
    get(websiteId, languageCode);
  });

  it('should call `getUrl` with the correct arguments', () => {
    const pathname = getPathname(websiteId, languageCode);

    expect(getUrl).toHaveBeenCalledWith(ORIGIN, pathname);
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
