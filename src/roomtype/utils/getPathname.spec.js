import { PATHNAME_TEMPLATE } from '../constants';

import { getPathname } from './getPathname';

describe(`${PATHNAME_TEMPLATE} getPathname`, () => {
  const propertyId = 4321;

  it('should return the right string', () => {
    const actual = getPathname(propertyId);

    expect(actual).toBe(`/v2/websites/roomtype/property/${propertyId}`);
  });
});
