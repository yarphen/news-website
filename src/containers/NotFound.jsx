import React, { PureComponent } from 'react';
import { Layout } from './Layout';

class NotFound extends PureComponent {
  render() {
    return (
      <Layout title="Not Found">
        <h1>404. Not Found</h1>
      </Layout>
    );
  }
}

export { NotFound };
