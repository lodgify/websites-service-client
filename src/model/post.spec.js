jest.mock('@lodgify/fetch-helpers');
jest.mock('../utils/getUrl');
jest.mock('./utils/getAdaptedPath');
jest.mock('./utils/getAdaptedHost');
jest.mock('../utils/setFunctionName');

import {
  postJSON,
  // eslint-disable-next-line import/named
  postJSONReturnValue,
} from '@lodgify/fetch-helpers';

import { ORIGIN } from '../constants';
import { getUrl } from '../utils/getUrl';
import { setFunctionName } from '../utils/setFunctionName';

import { PATHNAME, RESOURCE_NAME } from './constants';
import { getAdaptedHost } from './utils/getAdaptedHost';
import { getAdaptedPath } from './utils/getAdaptedPath';

const { post } = require('./post');

const host = 'someHost';
const path = 'someUrl';
const cookie = 'someCookie';

const URL = 'URL';
const ADAPTED_PATH = 'ADAPTED_PATH';
const ADAPTED_HOST = 'ADAPTED_HOST';

getUrl.mockImplementation(() => URL);
getAdaptedPath.mockImplementation(() => ADAPTED_PATH);
getAdaptedHost.mockImplementation(() => ADAPTED_HOST);

describe(`${PATHNAME}/post`, () => {
  beforeAll(() => {
    post(host, path, cookie);
  });

  it('should call `getUrl` with the correct arguments', () => {
    expect(getUrl).toHaveBeenCalledWith(ORIGIN, PATHNAME);
  });

  it('should call `getAdaptedPath` with the correct arguments', () => {
    expect(getAdaptedPath).toHaveBeenCalledWith(path);
  });

  it('should call `getAdaptedHost` with the correct arguments', () => {
    expect(getAdaptedHost).toHaveBeenCalledWith(host);
  });

  it('should call `postJSON` with the correct arguments', () => {
    expect(postJSON).toHaveBeenCalledWith(
      URL,
      {
        host: ADAPTED_HOST,
        path: ADAPTED_PATH,
      },
      {
        Cookie: cookie,
      }
    );
  });

  it('should return whatever `postJSON` returns', () => {
    const actual = post();

    expect(actual).toBe(postJSONReturnValue);
  });

  it('should call `setFunctionName` with the right arguments', () => {
    expect(setFunctionName).toHaveBeenCalledWith(post, RESOURCE_NAME);
  });
});
