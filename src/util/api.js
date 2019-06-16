const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor aliquam nulla facilisi cras fermentum odio eu. Egestas dui id ornare arcu. Blandit aliquam etiam erat velit scelerisque. Convallis a cras semper auctor neque vitae. Pretium aenean pharetra magna ac placerat vestibulum lectus. Morbi quis commodo odio aenean sed adipiscing diam. Neque viverra justo nec ultrices dui sapien eget mi proin. Diam maecenas ultricies mi eget. Ut morbi tincidunt augue interdum. Proin sed libero enim sed faucibus. Ipsum consequat nisl vel pretium. Eget nunc lobortis mattis aliquam. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Egestas sed tempus urna et pharetra pharetra massa massa. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Sed adipiscing diam donec adipiscing tristique risus nec. In egestas erat imperdiet sed euismod nisi porta lorem. Sed velit dignissim sodales ut eu sem.';

const mockData = [{
  id: 1,
  title: 'Fresh news',
  text: `Fresh news. ${LOREM_IPSUM}`,
  image: '/images/picture.jpg',
  tags: { news: 1, regions: 1 },
  updated: new Date(),
}, {
  id: 2,
  title: 'Hot parties',
  text: `Hot parties. ${LOREM_IPSUM}`,
  image: '/images/picture.jpg',
  tags: { news: 1, video: 1 },
  updated: new Date(),
}, {
  id: 3,
  title: 'International news',
  text: `International news. ${LOREM_IPSUM}`,
  image: '/images/picture.jpg',
  tags: { video: 1, tv: 1 },
  updated: new Date(),
}, {
  id: 4,
  title: 'International news',
  text: `International news. ${LOREM_IPSUM}`,
  image: '/images/picture.jpg',
  tags: { tv: 1 },
  updated: new Date(),
}, {
  id: 5,
  title: 'Some funny stuff',
  text: `Some funny stuff. ${LOREM_IPSUM}`,
  image: '/images/picture.jpg',
  tags: { video: 1 },
  updated: new Date(),
}, {
  id: 6,
  title: 'British scientists...',
  text: `British scientists... ${LOREM_IPSUM}`,
  image: '/images/picture.jpg',
  tags: { news: 1 },
  updated: new Date(),
}, {
  id: 7,
  title: 'Game of thrones',
  text: `Game of thrones. ${LOREM_IPSUM}`,
  image: '/images/picture.jpg',
  tags: { regions: 1 },
  updated: new Date(),
}, {
  id: 8,
  title: 'Nothing interesting',
  text: `Nothing interesting. ${LOREM_IPSUM}`,
  image: '/images/picture.jpg',
  tags: { news: 1, regions: 1 },
  updated: new Date(),
}, {
  id: 9,
  title: 'Weather forecast',
  text: `Weather forecast. ${LOREM_IPSUM}`,
  image: '/images/picture.jpg',
  tags: { news: 1, regions: 1 },
  updated: new Date(),
}, {
  id: 10,
  title: 'Elon Musk made a new rocket',
  text: `Elon Musk made a new rocket. ${LOREM_IPSUM}`,
  image: '/images/picture.jpg',
  tags: { news: 1, regions: 1 },
  updated: new Date(),
}, {
  id: 11,
  title: 'TLS is insecure!',
  text: `TLS is insecure! ${LOREM_IPSUM}`,
  image: '/images/picture.jpg',
  tags: { news: 1, regions: 1 },
  updated: new Date(),
}, {
  id: 12,
  title: 'Some random videos',
  text: `Some random videos. ${LOREM_IPSUM}`,
  image: '/images/picture.jpg',
  tags: { video: 1 },
  updated: new Date(),
}, {
  id: 13,
  title: 'Lorem ipsum',
  text: `Lorem ipsum. ${LOREM_IPSUM}`,
  image: '/images/picture.jpg',
  tags: { tv: 1 },
  updated: new Date(),
}, {
  id: 14,
  title: 'Lorem ipsum',
  text: `Lorem ipsum. ${LOREM_IPSUM}`,
  image: '/images/picture.jpg',
  tags: { tv: 1 },
  updated: new Date(),
}, {
  id: 15,
  title: 'Lorem ipsum',
  text: `Lorem ipsum. ${LOREM_IPSUM}`,
  image: '/images/picture.jpg',
  tags: { video: 1 },
  updated: new Date(),
}];

const fetchItems = async (q, tag, limit, offset) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockData.filter((item) => {
    let matchQ = true;
    let matchTag = true;
    if (tag) {
      matchTag = !!item.tags[tag];
    }
    if (q) {
      const { title, text } = item;
      const titleLC = title.toLowerCase();
      const textLC = text.toLowerCase();
      const qLC = q.toLowerCase();
      matchQ = titleLC.includes(qLC) || textLC.includes(qLC);
    }
    return matchTag && matchQ;
  }).slice(offset, offset + limit);
};

export const api = { fetchItems };
