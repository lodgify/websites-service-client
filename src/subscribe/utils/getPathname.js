import {
  WEBSITE_ID_PLACEHOLDER,
  LANGUAGE_CODE_PLACEHOLDER,
} from '../../constants';

export const getPathname = (pathnameTemplate, websiteId, language) =>
  pathnameTemplate
    .replace(WEBSITE_ID_PLACEHOLDER, websiteId)
    .replace(LANGUAGE_CODE_PLACEHOLDER, language);
