import { BASE_PATH_FRAGMENT } from '../constants';

export const RESOURCE_NAME = 'image';

export const IMAGE_ID_PLACEHOLDER = ':imageId';

export const IMAGE_ID_PATH_FRAGMENT = `/${IMAGE_ID_PLACEHOLDER}`;

export const PATHNAME_TEMPLATE = `${BASE_PATH_FRAGMENT}/${RESOURCE_NAME}${IMAGE_ID_PATH_FRAGMENT}`;
