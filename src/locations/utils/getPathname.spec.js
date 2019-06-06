import { PATHNAME_TEMPLATE } from '../constants';

import { getPathname } from './getPathname';

describe(`${PATHNAME_TEMPLATE} getPathname`, () => {
  const websiteId = 1234;

  it('should return the right string', () => {
    const actual = getPathname(websiteId);

    expect(actual).toBe(`/v2/websites/locations/website/${websiteId}`);
  });
});
