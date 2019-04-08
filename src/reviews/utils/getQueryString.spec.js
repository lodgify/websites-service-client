import { PATHNAME_TEMPLATE } from '../constants';

import { getQueryString } from './getQueryString';

describe(`${PATHNAME_TEMPLATE} getQueryString`, () => {
  it('should return the right string', () => {
    const page = 1;
    const count = 2;
    const actual = getQueryString(page, count);

    expect(actual).toBe(`?page=${page}&count=${count}`);
  });

  it('should return the right string if optional params are not defined', () => {
    const actual = getQueryString();

    expect(actual).toBe('');
  });

  it('should return the right string if only page is defined', () => {
    const page = 100;
    const actual = getQueryString(page);

    expect(actual).toBe(`?page=${page}`);
  });
});
