import React from 'react';
import { CustomContainer } from './styled';
import { propTypes, defaultProps } from './props';

export const ScrollableContainer = ({ children, ...rest }) => {
  return <CustomContainer {...rest}>{children}</CustomContainer>;
};

ScrollableContainer.propTypes = propTypes;
ScrollableContainer.defaultProps = defaultProps;
