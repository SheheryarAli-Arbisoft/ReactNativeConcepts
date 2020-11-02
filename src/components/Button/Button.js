import React from 'react';
import { StyledButton } from './styled';
import { propTypes, defaultProps } from './props';

export const Button = ({ title, ...rest }) => {
  return <StyledButton title={title} {...rest} />;
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
