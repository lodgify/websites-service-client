const responseData = [
  {
    availableFor: 'nothing',
    endDate: '2018-11-07',
    startDate: '2018-11-06',
  },
];

const get = jest.fn(() => Promise.resolve(responseData));

module.exports = { get, responseData };
