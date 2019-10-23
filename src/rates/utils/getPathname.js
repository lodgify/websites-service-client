import {
  WEBSITE_ID_PLACEHOLDER,
  PROPERTY_ID_PATH_FRAGMENT,
  PROPERTY_ID_PLACEHOLDER,
  LANGUAGE_CODE_FRAGMENT,
  LANGUAGE_CODE_PLACEHOLDER,
} from '../../constants';
import { PATHNAME_TEMPLATE } from '../constants';

/**
 * @param  {number} websiteId
 * @param  {string} [languageCode]
 * @param  {number} [propertyId]
 * @return {string}
 */
export const getPathname = (websiteId, languageCode, propertyId) => {
  const basePathname = PATHNAME_TEMPLATE.replace(
    WEBSITE_ID_PLACEHOLDER,
    websiteId
  );

  if (propertyId !== undefined && languageCode !== undefined) {
    return `${basePathname}${LANGUAGE_CODE_FRAGMENT.replace(
      LANGUAGE_CODE_PLACEHOLDER,
      languageCode
    )}${PROPERTY_ID_PATH_FRAGMENT.replace(
      PROPERTY_ID_PLACEHOLDER,
      propertyId
    )}`;
  }

  return basePathname;
};
