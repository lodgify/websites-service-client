import { PATHNAME_TEMPLATE } from '../constants';

import { getPathname } from './getPathname';

describe(`${PATHNAME_TEMPLATE} getPathname`, () => {
  const websiteId = 1234;
  const propertyId = 4321;

  it('should return the right string', () => {
    const actual = getPathname(websiteId, propertyId);

    expect(actual).toBe(
      `/v2/websites/reviews/website/${websiteId}/property/${propertyId}`
    );
  });
});
