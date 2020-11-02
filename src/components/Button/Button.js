import React from 'react';
import { StyledButton } from './styled';
import { propTypes, defaultProps } from './props';
import { Text } from '../Text';

export const Button = ({ value, ...rest }) => {
  return (
    <StyledButton {...rest}>
      <Text centered colorWhite>
        {value}
      </Text>
    </StyledButton>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
