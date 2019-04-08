import { PATHNAME_TEMPLATE } from '../constants';

import { getPathname } from './getPathname';

describe(`${PATHNAME_TEMPLATE} getPathname`, () => {
  const websiteId = 1234;
  const languageCode = 4321;

  it('should return the right string', () => {
    const actual = getPathname(websiteId, languageCode);

    expect(actual).toBe(
      `/v2/websites/promotion/website/${websiteId}/language/${languageCode}`
    );
  });
});
