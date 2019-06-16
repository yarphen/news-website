import { Home } from './Home';
import { withTagAndTitle } from '../hoc';

export * from './Home';
export * from './NotFound';
export * from './Layout';

const News = withTagAndTitle({ tagName: 'news', title: 'News' })(Home);
const Regions = withTagAndTitle({ tagName: 'regions', title: 'Regions' })(Home);
const Video = withTagAndTitle({ tagName: 'video', title: 'Video' })(Home);
const TV = withTagAndTitle({ tagName: 'tv', title: 'TV' })(Home);

export {
  News,
  Regions,
  Video,
  TV,
};
