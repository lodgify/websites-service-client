const responseData = {
  schedule: [
    {
      whenPrefix: 'On',
      when: 'Booking',
      days: 0,
      fixedAmount: 100,
      percentage: 11,
    },
    {
      whenPrefix: 'Before',
      when: 'Arrival',
      days: 3,
      fixedAmount: 100,
      percentage: 22.2,
    },
    {
      when: 'Never',
      days: 1,
      note: 'Payment notes',
    },
  ],
  cancellation: {
    type: 'Partial',
    rules: [
      {
        daysBefore: 2,
        percentage: 20,
      },
      {
        daysBefore: 10,
        fixedAmount: 10,
      },
    ],
  },
  damageDeposit: {
    fixedAmount: 10,
    percentage: 50,
  },
  charges: {
    cleaning: {
      fixedAmount: 20,
    },
    miscellaneous: {
      fixedAmount: 10,
      percentage: 50,
      perPersonNight: {
        fixedAmount: 333.3,
      },
    },
    taxes: {
      fixedAmount: 11,
      percentage: 51,
      perPersonNight: {
        fixedAmount: 444.4,
      },
    },
  },
  currencyCode: 'POUNDSY POUNDS',
};

const get = jest.fn(() => Promise.resolve(responseData));

module.exports = { get, responseData };
