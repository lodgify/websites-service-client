import { PATHNAME_TEMPLATE } from '../constants';
import {
  WEBSITE_ID_PLACEHOLDER,
  PROPERTY_ID_PLACEHOLDER,
  LANGUAGE_CODE_PLACEHOLDER,
  LANGUAGE_CODE_FRAGMENT,
} from '../../constants';

/**
 * @param  {number} websiteId
 * @param  {number} propertyId
 * @param  {string} languageCode
 * @return {string}
 */
export const getPathname = (websiteId, propertyId, languageCode) => {
  const basePathname = PATHNAME_TEMPLATE.replace(
    WEBSITE_ID_PLACEHOLDER,
    websiteId
  ).replace(PROPERTY_ID_PLACEHOLDER, propertyId);

  if (languageCode === undefined) return basePathname;

  return `${basePathname}${LANGUAGE_CODE_FRAGMENT}`.replace(
    LANGUAGE_CODE_PLACEHOLDER,
    languageCode
  );
};
