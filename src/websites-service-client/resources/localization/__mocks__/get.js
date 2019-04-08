const responseData = 'culture';

const get = jest.fn(() => Promise.resolve(responseData));

module.exports = { get, responseData };
