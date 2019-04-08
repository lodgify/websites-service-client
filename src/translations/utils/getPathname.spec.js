import { getPathname } from './getPathname';

describe('`getPathname`', () => {
  it('should return the right string', () => {
    const actual = getPathname('🕸', '🈹');

    expect(actual).toEqual('/v2/websites/translation/website/🕸/🈹');
  });
});
