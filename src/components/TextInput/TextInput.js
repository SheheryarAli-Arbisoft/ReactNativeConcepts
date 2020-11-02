import React from 'react';
import { StyledTextInput } from './styled';
import { propTypes, defaultProps } from './props';

export const TextInput = ({ ...rest }) => {
  return <StyledTextInput {...rest} />;
};

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;
