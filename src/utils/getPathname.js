import { WEBSITE_ID_PLACEHOLDER } from '../constants';

/**
 * @param  {string} pathnameTemplate
 * @param  {number} websiteId
 * @return {string}
 */
export const getPathname = (pathnameTemplate, websiteId) =>
  pathnameTemplate.replace(WEBSITE_ID_PLACEHOLDER, websiteId);
