jest.mock('@lodgify/fetch-helpers');
jest.mock('../utils/getUrl');
jest.mock('./utils/getPathname');

import {
  postJSON,
  // eslint-disable-next-line import/named
  postJSONReturnValue,
} from '@lodgify/fetch-helpers';

import { ORIGIN } from '../constants';
import { getUrl } from '../utils/getUrl';

import { getPathname } from './utils/getPathname';
import { post } from './post';

const URL = 'url';
const websiteId = 123;
const propertyId = 321;
const PATHNAME = `/pathname/${websiteId}`;

getUrl.mockImplementation(() => URL);
getPathname.mockImplementation(() => PATHNAME);

const formValues = '📝';

describe(`POST review`, () => {
  beforeAll(() => {
    post(websiteId, propertyId, formValues);
  });

  it('should call `getPathname` with the correct arguments', () => {
    expect(getPathname).toHaveBeenCalledWith(websiteId, propertyId);
  });

  it('should call `getUrl` with the correct arguments', () => {
    expect(getUrl).toHaveBeenCalledWith(ORIGIN, PATHNAME);
  });

  it('should call `postJSON` with the correct arguments', () => {
    expect(postJSON).toHaveBeenCalledWith(URL, formValues);
  });

  it('should return whatever `postJSON` returns', () => {
    const actual = post();

    expect(actual).toBe(postJSONReturnValue);
  });
});
