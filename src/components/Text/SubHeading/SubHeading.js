import React from 'react';
import { CustomText } from './styled';
import { propTypes, defaultProps } from './props';

export const SubHeading = ({ children, ...rest }) => {
  return <CustomText {...rest}>{children}</CustomText>;
};

SubHeading.propTypes = propTypes;
SubHeading.defaultProps = defaultProps;
