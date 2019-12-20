const PROTOCOL = 'https://';
const DOMAIN = global.process.env.WEBSITES_SERVICE_HOST;

export const ORIGIN = global.process.env.WEBSITES_SERVICE_URL;

export const BASE_PATH_FRAGMENT = '/v2/websites';

export const LANGUAGE_CODE_PLACEHOLDER = ':languageCode';
export const PAGE_ID_PLACEHOLDER = ':pageId';
export const PROPERTY_ID_PLACEHOLDER = ':propertyId';
export const ROOM_TYPE_ID_PLACEHOLDER = ':roomTypeId';
export const WEBSITE_ID_PLACEHOLDER = ':websiteId';

export const LANGUAGE_CODE_FRAGMENT = `/language/${LANGUAGE_CODE_PLACEHOLDER}`;
export const PAGE_ID_PATH_FRAGMENT = `/page/${PAGE_ID_PLACEHOLDER}`;
export const PROPERTY_ID_PATH_FRAGMENT = `/property/${PROPERTY_ID_PLACEHOLDER}`;
export const PROPERTY_OWNER_PATH_FRAGMENT = '/propertyowner/';
export const ROOM_TYPE_ID_PATH_FRAGMENT = `/roomtype/${ROOM_TYPE_ID_PLACEHOLDER}`;
export const WEBSITE_ID_PATH_FRAGMENT = `/website/${WEBSITE_ID_PLACEHOLDER}`;

export const LOGIN_REDIRECT_URL = `${PROTOCOL}${DOMAIN}${PROPERTY_OWNER_PATH_FRAGMENT}`;
