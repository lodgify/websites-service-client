jest.mock('./../utils/postForm');

import { postForm } from '../utils/postForm';

import { post } from './post';
import { PATHNAME_TEMPLATE } from './constants';

const websiteId = 123;
const formValues = '📝';

describe(`POST signup`, () => {
  it('should call `postForm` with the correct arguments', () => {
    post(websiteId, formValues);

    expect(postForm).toHaveBeenCalledWith(
      PATHNAME_TEMPLATE,
      websiteId,
      formValues
    );
  });
});
