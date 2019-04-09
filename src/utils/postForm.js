import { postJSON } from '@lodgify/fetch-helpers';

import { ORIGIN } from '../constants';

import { getPathname } from './getPathname';
import { getUrl } from './getUrl';
import { getPostFormHeaders } from './getPostFormHeaders';

/**
 * @param  {string} pathnameTemplate
 * @param  {number} websiteId
 * @param  {Object} formValues
 * @param  {string} [reCaptchaToken]
 * @return {Promise}
 */
export const postForm = (
  pathnameTemplate,
  websiteId,
  formValues,
  reCaptchaToken
) => {
  const pathname = getPathname(pathnameTemplate, websiteId);
  const url = getUrl(ORIGIN, pathname);
  const headers = getPostFormHeaders(reCaptchaToken);

  return postJSON(url, formValues, headers);
};
