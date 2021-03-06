# Websites service client

A client for making it easy to interact with the Lodgify websites service 2.0

## Install

`$ npm install @lodgify/websites-service-client`

## Usage

### getAvailability
```js
import { getAvailability } from '@lodgify/websites-service-client';

const propertyId = 123;
const websiteId = 456;
const roomTypeId = 897;

const startDate = '2018-12-1';
const numberOfGuests = '1';
const numberOfMonths = '4';

getAvailability(
  startDate,
  numberOfGuests,
  numberOfMonths,
  websiteId,
  propertyId,
  roomTypeId
);
```

### postCallMeBack
```js
import { postCallMeBack } from '@lodgify/websites-service-client';

const websiteId = 123;
const formValues = '📝';
const reCaptchaToken = '🔴';

postCallMeBack(
  websiteId,
  formValues,
  reCaptchaToken
);
```

### postContact
```js
import { postContact } from '@lodgify/websites-service-client';

const websiteId = 123;
const formValues = '📝';
const reCaptchaToken = '🔴';

postContact(
  websiteId,
  formValues,
  reCaptchaToken
);
```

### getCurrencies
```js
import { getCurrencies } from '@lodgify/websites-service-client';

const currencies = getCurrencies();
```

### getImage
```js
import { getImage } from '@lodgify/websites-service-client';

const imageId = 'c3b2a1';

getImage(imageId);
```

### getLocalization
```js
import { getLocalization } from '@lodgify/websites-service-client';

const localization = getLocalization();
```

### getLocations
```js
import { getLocations } from '@lodgify/websites-service-client';

const websiteId = 0121

getLocations(websiteId);
```

### postModel
```js
import { postModel } from '@lodgify/websites-service-client';

const host = 'someHost';
const path = 'someUrl';
const cookie = 'cookie=somevalue;';

postModel(
  host,
  path,
  cookie
);
```

### getPayments
```js
import { getPayments } from '@lodgify/websites-service-client';

const propertyId = '1100';
const websiteId = '0011';
const languageCode = 'en';

getPayments(
  websiteId,
  propertyId,
  languageCode
);
```

### getPromotion
```js
import { getPromotion } from '@lodgify/websites-service-client';

const websiteId = '321';
const languageCode = 'en';

getPromotion(
  websiteId,
  languageCode
);
```

### getProperties
```js
import { getProperties } from '@lodgify/websites-service-client';

const websiteId = '321';
const propertyId = '123';
const languageCode = 'en';

getProperties(
  websiteId,
  propertyId,
  languageCode
);
```

### getRates
```js
import { getRates } from '@lodgify/websites-service-client';

const propertyId = 123;
const roomTypeId = 987;
const websiteId = 456;

const addOns = 'someAddOns';
const endDate = 'someEndDate';
const numberOfGuests = 'someNumberOfGuests';
const promotionCode = 'somePromotionCode';
const startDate = 'someStartDate';

const query = { addOns, endDate, numberOfGuests, promotionCode, startDate };

getRates(
  query,
  websiteId,
  propertyId,
  roomTypeId
);
```

### postRecoverPassword
```js
import { postRecoverPassword } from '@lodgify/websites-service-client';

const websiteId = 123;
const formValues = '📝';

postRecoverPassword(
  websiteId,
  languageCode
);
```

### getReviews
```js
import { getReviews } from '@lodgify/websites-service-client';

const websiteId = 176;
const propertyId = 198;
const page = 300;
const count = 400;

getReviews(
  websiteId,
  propertyId,
  { page, count }
);
```

### getRoomType
```js
import { getRoomType } from '@lodgify/websites-service-client';


const propertyId = 123;

getRoomType(propertyId);
```

### getSearchFilters
```js
import { getSearchFilters } from '@lodgify/websites-service-client';

const websiteId = 321;

getSearchFilters(websiteId);
```

### postSignUp
```js
import { postSignUp } from '@lodgify/websites-service-client';


const websiteId = 123;
const formValues = '📝';
const reCaptchaToken = '🔴';

postSignUp(
  websiteId,
  formValues,
  reCaptchaToken
);
```

### postSubscribe
```js
import { postSubscribe } from '@lodgify/websites-service-client';

const websiteId = 123;
const language = 'en';
const formValues = '📝';

postSubscribe(
  websiteId,
  language,
  formValues,
);
```

### getTimeOptions
```js
import { getTimeOptions } from '@lodgify/websites-service-client';

const timeOptions = getTimeOptions();
```

### getTranslations
```js
import { getTranslations } from '@lodgify/websites-service-client';

const websiteId = 1928;
const languageCode = 'it';

getTranslations(websiteId, language);
```

## Contributing

See [contributing](https://github.com/lodgify/identity-server-client/blob/master/docs/CONTRIBUTING.md).
