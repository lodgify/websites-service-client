import { LANGUAGE_CODE_PLACEHOLDER, PATHNAME } from '../constants';
import { WEBSITE_ID_PLACEHOLDER } from '../../constants';

/**
 * @param  {number} websiteId
 * @param  {string} languageCode
 * @return {string}
 */
export const getPathname = (websiteId, languageCode) =>
  PATHNAME.replace(WEBSITE_ID_PLACEHOLDER, websiteId).replace(
    LANGUAGE_CODE_PLACEHOLDER,
    languageCode
  );
