const responseData = {
  rating: 5,
  reviews: [
    {
      type: 'Lodgify',
      date: '2018-11-07T17:05:41',
      author: 'Andrea',
      authorLocation: 'Kiribati',
      rating: 5,
      title: 'Amazing Island',
      guestType: 'GuestsWithPets',
      stayDate: '11/2018',
      text: 'Magical place with a few policemen',
      roomTypeName: 'The Chief',
    },
  ],
};

const get = jest.fn(() => Promise.resolve(responseData));

module.exports = { get, responseData };
