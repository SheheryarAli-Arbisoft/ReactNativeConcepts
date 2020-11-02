import React from 'react';
import { StyledButton, StyledButtonText } from './styled';
import { propTypes, defaultProps } from './props';

export const Button = ({ value, onPress, ...rest }) => {
  return (
    <StyledButton onPress={onPress} {...rest}>
      <StyledButtonText {...rest}>{value}</StyledButtonText>
    </StyledButton>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
