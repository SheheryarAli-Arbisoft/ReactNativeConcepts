import React from 'react';
import { CustomText } from './styled';
import { propTypes, defaultProps } from './props';

export const Heading = ({ children, ...rest }) => {
  return <CustomText {...rest}>{children}</CustomText>;
};

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;
