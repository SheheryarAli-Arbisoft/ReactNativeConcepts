import React from 'react';
import { StyledInput } from './styled';
import { propTypes, defaultProps } from './props';

export const Input = ({ placeholder, ...rest }) => {
  return <StyledInput placeholder={placeholder} {...rest} />;
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
