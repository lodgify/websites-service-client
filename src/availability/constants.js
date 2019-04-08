import { BASE_PATH_FRAGMENT, WEBSITE_ID_PATH_FRAGMENT } from '../constants';

export const PATHNAME_TEMPLATE = `${BASE_PATH_FRAGMENT}/availability${WEBSITE_ID_PATH_FRAGMENT}`;

export const AVAILABILITY_NOT_AVAILABLE = 'NotAvailable';
export const AVAILABILITY_CHECK_IN = 'CheckIn';
export const AVAILABILITY_CHECK_OUT = 'CheckOut';
