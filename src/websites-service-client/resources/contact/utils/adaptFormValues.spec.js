import { adaptFormValues } from './adaptFormValues';

describe('`adaptFormValues`', () => {
  it('should return the right structure', () => {
    const actual = adaptFormValues({
      comments: 'yo',
      otherFormValue: 'sup',
    });

    expect(actual).toEqual({ comment: 'yo', otherFormValue: 'sup' });
  });
});
