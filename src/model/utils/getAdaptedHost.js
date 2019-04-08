/**
 * @param  {string} host
 * @return {string}
 */
export const getAdaptedHost = host =>
  host.indexOf('localhost:') !== -1
    ? 'npreview-mos-eisley.lodgifyintegration.com'
    : host;
