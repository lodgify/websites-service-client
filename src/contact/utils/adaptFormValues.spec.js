import { adaptFormValues } from './adaptFormValues';

describe('`adaptFormValues`', () => {
  it('should return the right structure', () => {
    const actual = adaptFormValues({
      comments: 'yo',
      dates: {
        startDate: '📅',
        endDate: '🗓',
      },
      property: '🏠',
      otherFormValue: 'sup',
    });

    expect(actual).toEqual({
      comment: 'yo',
      endDate: '🗓',
      otherFormValue: 'sup',
      propertyId: '🏠',
      startDate: '📅',
    });
  });
});
