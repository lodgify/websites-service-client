/**
 * @param  {string} origin
 * @param  {string} pathname
 * @param  {string} queryString
 * @return {string}
 */
export const getUrl = (origin, pathname, queryString = '') =>
  `${origin}${pathname}${queryString}`;
