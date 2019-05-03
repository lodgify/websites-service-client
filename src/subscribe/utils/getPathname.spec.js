import { PATHNAME_TEMPLATE } from '../constants';

import { getPathname } from './getPathname';

describe('getPathname', () => {
  it('should return the correct string', () => {
    const actual = getPathname(PATHNAME_TEMPLATE, 1234, 'ko');

    expect(actual).toBe('/website/1234/language/ko/subscribe');
  });
});
