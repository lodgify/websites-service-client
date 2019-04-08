const responseData = {
  '216930': {
    name: 'Rental Type',
  },
  '217176': {
    name: 'Rental Type  #1',
  },
};

const get = jest.fn(() => Promise.resolve(responseData));

module.exports = { get, responseData };
