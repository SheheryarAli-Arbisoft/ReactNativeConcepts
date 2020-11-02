import styled from 'styled-components';

const getTextSize = variant => {
  switch (variant) {
    case 'normal':
      return '20px';
    case 'sub-heading':
      return '28px';
    case 'heading':
      return '36px';
    default:
      return '0';
  }
};

const getFontWeight = variant => {
  switch (variant) {
    case 'heading':
      return 'bold';
    default:
      return 'normal';
  }
};

export const StyledText = styled.Text`
  font-size: ${({ variant }) => getTextSize(variant)};
  font-weight: ${({ variant }) => getFontWeight(variant)};
`;
