import { PATHNAME_TEMPLATE } from '../constants';

import { getPathname } from './getPathname';

describe(`${PATHNAME_TEMPLATE} getPathname`, () => {
  const imageId = 'a1b2c3d4';

  it('should return the right string', () => {
    const actual = getPathname(imageId);

    expect(actual).toBe(`/v2/websites/image/${imageId}`);
  });
});
