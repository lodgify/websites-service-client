const responseData = ['some', 'currencies'];

const get = jest.fn(() => Promise.resolve(responseData));

module.exports = { get, responseData };
