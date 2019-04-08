import { IMAGE_ID_PLACEHOLDER } from '../constants';
import { PATHNAME_TEMPLATE } from '../constants';

/**
 * @param  {string} imageGuid
 * @return {string}
 */
export const getPathname = imageGuid =>
  PATHNAME_TEMPLATE.replace(IMAGE_ID_PLACEHOLDER, imageGuid);
