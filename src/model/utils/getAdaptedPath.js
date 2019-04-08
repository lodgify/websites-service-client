/**
 * @param {string} path
 * @return {string}
 */
export const getAdaptedPath = path =>
  path
    .split('/')
    .slice(0, 3)
    .join('/');
