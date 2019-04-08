import {
  WEBSITE_ID_PLACEHOLDER,
  LANGUAGE_CODE_PLACEHOLDER,
} from '../../constants';
import { PATHNAME_TEMPLATE } from '../constants';

/**
 * @param  {number} websiteId
 * @param  {string} languageCode
 * @return {string}
 */
export const getPathname = (websiteId, languageCode) =>
  PATHNAME_TEMPLATE.replace(WEBSITE_ID_PLACEHOLDER, websiteId).replace(
    LANGUAGE_CODE_PLACEHOLDER,
    languageCode
  );
