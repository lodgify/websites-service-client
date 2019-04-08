import {
  WEBSITE_ID_PLACEHOLDER,
  PROPERTY_ID_PATH_FRAGMENT,
  PROPERTY_ID_PLACEHOLDER,
  ROOM_TYPE_ID_PATH_FRAGMENT,
  ROOM_TYPE_ID_PLACEHOLDER,
} from '../../constants';
import { PATHNAME_TEMPLATE } from '../constants';

/**
 * @param  {number} websiteId
 * @param  {number} [propertyId]
 * @param  {number} [roomTypeId]
 * @return {string}
 */
export const getPathname = (websiteId, propertyId, roomTypeId) => {
  const basePathname = PATHNAME_TEMPLATE.replace(
    WEBSITE_ID_PLACEHOLDER,
    websiteId
  );

  switch (true) {
    case propertyId === undefined:
      return basePathname;
    case roomTypeId === undefined:
      return `${basePathname}${PROPERTY_ID_PATH_FRAGMENT.replace(
        PROPERTY_ID_PLACEHOLDER,
        propertyId
      )}`;
    default:
      return `${basePathname}${PROPERTY_ID_PATH_FRAGMENT.replace(
        PROPERTY_ID_PLACEHOLDER,
        propertyId
      )}${ROOM_TYPE_ID_PATH_FRAGMENT.replace(
        ROOM_TYPE_ID_PLACEHOLDER,
        roomTypeId
      )}`;
  }
};
