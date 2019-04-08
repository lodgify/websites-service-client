import { PROPERTY_ID_PLACEHOLDER } from '../../constants';
import { PATHNAME_TEMPLATE } from '../constants';

/**
 * @param  {number} propertyId
 * @return {string}
 */
export const getPathname = propertyId =>
  PATHNAME_TEMPLATE.replace(PROPERTY_ID_PLACEHOLDER, propertyId);
