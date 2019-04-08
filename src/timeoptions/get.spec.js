jest.mock('@lodgify/fetch-related-utils');
jest.mock('../utils/getUrl');

import {
  getJSON,
  // eslint-disable-next-line import/named
  getJSONReturnValue,
} from '@lodgify/fetch-related-utils';

import { ORIGIN } from '../constants';
import { getUrl } from '../utils/getUrl';

import { PATHNAME } from './constants';
import { get } from './get';

const URL = 'url';

getUrl.mockImplementation(() => URL);

describe(`GET staticdata/timeoptions`, () => {
  beforeAll(() => {
    get();
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
