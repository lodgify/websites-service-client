const responseData = {
  propertyCurrency: 'YENNY YEN YEN',
  roomTypes: 'some room types',
};

const get = jest.fn(() => Promise.resolve(responseData));

module.exports = { get, responseData };
