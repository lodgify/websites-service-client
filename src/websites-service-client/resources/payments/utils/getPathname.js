import { PATHNAME_TEMPLATE } from '../constants';
import {
  WEBSITE_ID_PLACEHOLDER,
  PROPERTY_ID_PLACEHOLDER,
} from '../../../constants';

/**
 * @param  {number} websiteId
 * @param  {number} propertyId
 * @return {string}
 */
export const getPathname = (websiteId, propertyId) =>
  PATHNAME_TEMPLATE.replace(WEBSITE_ID_PLACEHOLDER, websiteId).replace(
    PROPERTY_ID_PLACEHOLDER,
    propertyId
  );
