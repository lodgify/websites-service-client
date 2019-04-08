/**
 * @param {number} page
 * @param {number} count
 * @return {string}
 */
export const getQueryString = (page, count) => {
  const queryString = [!!page && `page=${page}`, !!count && `count=${count}`]
    .filter(Boolean)
    .join('&');

  return !!queryString ? '?' + queryString : '';
};
