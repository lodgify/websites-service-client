jest.mock('@lodgify/fetch-helpers');
jest.mock('./getUrl');
jest.mock('./getPathname');
jest.mock('./getPostFormHeaders');

import {
  postJSON,
  // eslint-disable-next-line import/named
  postJSONReturnValue,
} from '@lodgify/fetch-helpers';

import { ORIGIN } from '../constants';

import { getUrl } from './getUrl';
import { getPathname } from './getPathname';
import { getPostFormHeaders } from './getPostFormHeaders';
import { postForm } from './postForm';

const URL = 'url';
const websiteId = 123;
const reCaptchaToken = '🔴';
const PATHNAME = `/pathname/${websiteId}`;
const PATHNAME_TEMPLATE = `/pathname/:websiteId`;
const HEADERS = '🎧';

getUrl.mockImplementation(() => URL);
getPathname.mockImplementation(() => PATHNAME);
getPostFormHeaders.mockReturnValue(HEADERS);

const formValues = '📝';

describe(`POST postForm`, () => {
  beforeAll(() => {
    postForm(PATHNAME_TEMPLATE, websiteId, formValues, reCaptchaToken);
  });

  it('should call `getPathname` with the correct arguments', () => {
    expect(getPathname).toHaveBeenCalledWith(PATHNAME_TEMPLATE, websiteId);
  });

  it('should call `getUrl` with the correct arguments', () => {
    expect(getUrl).toHaveBeenCalledWith(ORIGIN, PATHNAME);
  });

  it('should call `getPostFormHeaders` with the correct arguments', () => {
    expect(getPostFormHeaders).toHaveBeenCalledWith(reCaptchaToken);
  });

  it('should call `postJSON` with the correct arguments', () => {
    expect(postJSON).toHaveBeenCalledWith(URL, formValues, HEADERS);
  });

  it('should return whatever `postJSON` returns', () => {
    const actual = postForm();

    expect(actual).toBe(postJSONReturnValue);
  });
});
