import { getPathname } from './getPathname';

describe('`getPathname`', () => {
  it('should return the right string', () => {
    const actual = getPathname('0011wId');

    expect(actual).toEqual('/v2/websites/search/0011wId/filters');
  });
});
