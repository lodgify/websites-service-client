import { WEBSITE_ID_PLACEHOLDER } from '../../constants';
import { PATHNAME_TEMPLATE } from '../constants';

/**
 * @param  {number} websiteId
 * @return {string}
 */
export const getPathname = websiteId =>
  PATHNAME_TEMPLATE.replace(WEBSITE_ID_PLACEHOLDER, websiteId);
