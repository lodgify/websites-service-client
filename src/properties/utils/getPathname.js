import {
  WEBSITE_ID_PLACEHOLDER,
  LANGUAGE_CODE_PLACEHOLDER,
  PROPERTY_ID_PLACEHOLDER,
} from '../../constants';
import { PATHNAME_TEMPLATE } from '../constants';

/**
 * @param  {number} websiteId
 * @param  {number} propertyId
 * @param  {string} languageCode
 * @return {string}
 */
export const getPathname = (websiteId, propertyId, languageCode) =>
  PATHNAME_TEMPLATE.replace(WEBSITE_ID_PLACEHOLDER, websiteId)
    .replace(PROPERTY_ID_PLACEHOLDER, propertyId)
    .replace(LANGUAGE_CODE_PLACEHOLDER, languageCode);
