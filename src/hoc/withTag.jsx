import React from 'react';

const withTag = tagName => (WrappedComponent) => {
  const ModalWrapper = props => <WrappedComponent {...props} tag={tagName} />;
  return ModalWrapper;
};

export { withTag };
