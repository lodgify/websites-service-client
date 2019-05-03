jest.mock('@lodgify/fetch-helpers');
jest.mock('./utils/getPathname');
jest.mock('../utils/getUrl');

import { postJSON } from '@lodgify/fetch-helpers';

import { getUrl } from '../utils/getUrl';
import { ORIGIN } from '../constants';

import { post } from './post';
import { getPathname } from './utils/getPathname';
import { PATHNAME_TEMPLATE } from './constants';

const PATHNAME = '🛣';
const URL = '🔗';

getPathname.mockReturnValue(PATHNAME);
getUrl.mockReturnValue(URL);

const websiteId = 123;
const language = 'en';
const formValues = '📝';

describe(`postSubscribe`, () => {
  beforeEach(() => post(websiteId, language, formValues));
  it('should call `getPathname` with the correct arguments', () => {
    expect(getPathname).toHaveBeenCalledWith(
      PATHNAME_TEMPLATE,
      websiteId,
      language
    );
  });

  it('should call `getUrl` with the correct arguments', () => {
    expect(getUrl).toHaveBeenCalledWith(ORIGIN, PATHNAME);
  });

  it('should call `postForm` with the correct arguments', () => {
    expect(postJSON).toHaveBeenCalledWith(URL, formValues);
  });
});
