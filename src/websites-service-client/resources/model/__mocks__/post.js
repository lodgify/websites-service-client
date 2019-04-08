const post = jest.fn();

// Mock call to `post`
post.mockImplementation(() => post);

post.then = jest.fn();
// Mock first call to `post.then`
const firstThenArg = {
  pageData: {
    culture: '👘',
  },
  websiteData: {
    id: 'someId',
  },
};

post.then.mockImplementationOnce(callback => {
  callback(firstThenArg);
  return post;
});
post.firstThenArg = firstThenArg;

// Mock second call to `post.then`
const secondThenArg = [1, 2];

post.then.mockImplementationOnce(callback => {
  callback(secondThenArg);
  return post;
});
post.secondThenArg = secondThenArg;

post.catch = jest.fn();
// Mock call to `post.catch`
const catchArg = { stack: '😱' };

post.catch.mockImplementationOnce(callback => {
  callback(catchArg);
  return post;
});
post.catchArg = catchArg;

module.exports = { post };
