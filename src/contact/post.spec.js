jest.mock('./../utils/postForm');

import { postForm } from '../utils/postForm';

import { adaptFormValues } from './utils/adaptFormValues';
import { post } from './post';
import { PATHNAME_TEMPLATE } from './constants';

const websiteId = 123;
const formValues = '📝';
const reCaptchaToken = '🔴';

describe(`POST contact`, () => {
  it('should call `postForm` with the correct arguments', () => {
    post(websiteId, formValues, reCaptchaToken);

    expect(postForm).toHaveBeenCalledWith(
      PATHNAME_TEMPLATE,
      websiteId,
      adaptFormValues(formValues),
      reCaptchaToken
    );
  });
});
