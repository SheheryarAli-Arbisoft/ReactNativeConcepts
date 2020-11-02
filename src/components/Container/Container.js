import React from 'react';
import { SafeAreaView } from 'react-native';
import { StyledContainer } from './styled';
import { propTypes, defaultProps } from './props';

export const Container = ({ children, ...rest }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StyledContainer>{children}</StyledContainer>
    </SafeAreaView>
  );
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;
