const responseData = {
  timeOptions: '🕕',
  timeZones: '🌐',
};

const get = jest.fn(() => Promise.resolve(responseData));

module.exports = { get, responseData };
