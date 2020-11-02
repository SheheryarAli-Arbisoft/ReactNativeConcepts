import styled from 'styled-components';

const getBackgroundColor = variant => {
  switch (variant) {
    case 'primary':
      return '#0398fc';
    case 'secondary':
      return '#00c21d';
    case 'danger':
      return '#c2001d';
    default:
      return 'transparent';
  }
};

const getTextSize = size => {
  switch (size) {
    case 'normal':
      return '20px';
    case 'large':
      return '30px';
    default:
      return '0';
  }
};

export const StyledButton = styled.TouchableOpacity`
  padding: 10px;
  background-color: ${({ variant }) => getBackgroundColor(variant)};
  border-radius: 5px;
`;

export const StyledButtonText = styled.Text`
  color: #ffffff;
  font-size: ${({ size }) => getTextSize(size)};
`;
