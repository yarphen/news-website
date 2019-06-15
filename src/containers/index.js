import { Home } from './Home';
import { withTag } from '../hoc';

export * from './Home';
export * from './NotFound';
export * from './Layout';

const News = withTag('news')(Home);
const Regions = withTag('regions')(Home);
const Video = withTag('video')(Home);
const TV = withTag('tv')(Home);

export {
  News,
  Regions,
  Video,
  TV,
};
