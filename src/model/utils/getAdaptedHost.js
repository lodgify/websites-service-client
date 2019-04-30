/**
 * @param  {string} host
 * @return {string}
 */
export const getAdaptedHost = host =>
  host.indexOf('localhost:') !== -1
    ? host.replace(/localhost:\d{4}/, 'lodgifyintegration.com')
    : host;
