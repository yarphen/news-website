import React from 'react';

const withTagAndTitle = ({ tagName, title }) => (WrappedComponent) => {
  const ModalWrapper = props => <WrappedComponent {...props} tag={tagName} title={title} />;
  return ModalWrapper;
};

export { withTagAndTitle };
