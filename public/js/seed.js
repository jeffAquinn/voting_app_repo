window.Seed = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const products = [
    {
      id: 1,
      title: 'Big Jeff Quinn',
      description: 'On-demand sand castle construction expertise.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/justen.jpg',
      productImageUrl: 'images/products/image-aqua.png',
    },
    {
      id: 2,
      title: 'Jesse Gwinn',
      description: 'The man with the master plan',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/matthew.png',
      productImageUrl: 'images/products/image-aqua.png',
    },
    {
      id: 3,
      title: 'Brandon Rundquest',
      description: 'Solving the worlds problems through numbers.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/steve.jpg',
      productImageUrl: 'images/products/image-yellow.png',
    },
    {
      id: 4,
      title: 'Kristina Lechnir',
      description: 'Brains, Beauty and style, the shinning star!4',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/kristy.png',
      productImageUrl: 'images/products/image-yellow.png',
    },
  ];

  return { products: products };
}());
