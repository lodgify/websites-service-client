import { getAdaptedHost } from './getAdaptedHost';

describe('utils/getAdaptedHost', () => {
  it('should return the correct host for localhost', () => {
    const host = 'localhost:5050';

    const actual = getAdaptedHost(host);

    expect(actual).toBe('npreview-mos-eisley.lodgifyintegration.com');
  });

  it('should return the correct host if not localhost', () => {
    const host = 'npreview-julio-x-livingstone-2.lodgifystaging.com';

    const actual = getAdaptedHost(host);

    expect(actual).toBe('npreview-julio-x-livingstone-2.lodgifystaging.com');
  });
});
