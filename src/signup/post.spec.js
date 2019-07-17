jest.mock('../utils/postForm');
jest.mock('../utils/setFunctionName');

import { postForm } from '../utils/postForm';
import { setFunctionName } from '../utils/setFunctionName';

import { post } from './post';
import { PATHNAME_TEMPLATE, RESOURCE_NAME } from './constants';

const websiteId = 123;
const formValues = '📝';
const reCaptchaToken = '🔴';

describe(`POST signup`, () => {
  it('should call `postForm` with the correct arguments', () => {
    post(websiteId, formValues, reCaptchaToken);

    expect(postForm).toHaveBeenCalledWith(
      PATHNAME_TEMPLATE,
      websiteId,
      formValues,
      reCaptchaToken
    );
  });

  it('should call `setFunctionName` with the right arguments', () => {
    expect(setFunctionName).toHaveBeenCalledWith(post, RESOURCE_NAME);
  });
});
