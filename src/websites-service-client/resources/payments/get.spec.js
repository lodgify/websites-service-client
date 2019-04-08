jest.mock('@lodgify/fetch-related-utils');
jest.mock('../utils/getUrl');

import {
  getJSON,
  // eslint-disable-next-line import/named
  getJSONReturnValue,
} from '@lodgify/fetch-related-utils';

import { ORIGIN } from '../../constants';
import { getUrl } from '../utils/getUrl';

import { getPathname } from './utils/getPathname';
import { get } from './get';

const URL = 'url';

getUrl.mockImplementation(() => URL);

const propertyId = '1100';
const websiteId = '0011';

describe(`GET payments`, () => {
  beforeAll(() => {
    get(websiteId, propertyId);
  });

  it('should call `getUrl` with the correct arguments', () => {
    const pathname = getPathname(websiteId, propertyId);

    expect(getUrl).toHaveBeenCalledWith(ORIGIN, pathname);
  });

  it('should call `getJSON` with the correct arguments', () => {
    expect(getJSON).toHaveBeenCalledWith(URL);
  });

  it('should return whatever `getJSON` returns', () => {
    const actual = get();

    expect(actual).toBe(getJSONReturnValue);
  });
});
