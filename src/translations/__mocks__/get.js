const responseData = {
  hello: 'hola',
};

const get = jest.fn(() => Promise.resolve(responseData));

module.exports = { get, responseData };
