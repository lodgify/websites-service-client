// Mock `.then` call
const responseData = {
  1: {
    amount: 10,
    code: 'code7105',
    text: 'Promotion test',
    image: {
      width: 1620,
      height: 1080,
      type: 'Jpeg',
      url: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    },
    isPercentage: true,
  },
  2: {
    amount: 5,
    code: 'code876234',
    text: 'Promotion test',
    image: {
      width: 1620,
      height: 1080,
      type: 'Jpeg',
      url: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    },
    isPercentage: true,
  },
};

const get = jest.fn(() => Promise.resolve(responseData));

module.exports = { get, responseData };
