import { getPathname } from './getPathname';

describe('`getPathname`', () => {
  it('should return the right string', () => {
    const actual = getPathname('0011wId', '1100pId');

    expect(actual).toEqual(
      '/v2/websites/payments/website/0011wId/property/1100pId'
    );
  });
});
