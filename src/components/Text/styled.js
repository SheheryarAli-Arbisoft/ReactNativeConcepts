import styled from 'styled-components';

export const StyledText = styled.Text`
  font-size: ${({ variant }) => (variant === 'heading' ? '36px' : '24px')};
  text-align: ${({ centered }) => (centered ? 'center' : 'left')};
  color: ${({ colorWhite }) => (colorWhite ? '#ffffff' : '#000000')};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? '15px' : '0')};
  font-weight: ${({ fontBold }) => (fontBold ? 'bold' : 'normal')};
  padding-top: ${({ paddingY }) => (paddingY ? '20px' : '0')};
  padding-bottom: ${({ paddingY }) => (paddingY ? '20px' : '0')};
`;
