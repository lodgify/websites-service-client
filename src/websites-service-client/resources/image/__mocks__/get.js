// Mock `.then` call
const responseData = {
  width: 1620,
  height: 1080,
  type: 'Jpeg',
  url: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
};

const get = jest.fn(() => Promise.resolve(responseData));

module.exports = { get, responseData };
