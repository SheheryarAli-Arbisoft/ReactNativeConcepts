import styled from 'styled-components';
import { ListItem } from 'react-native-elements';

export const StyledList = styled.FlatList`
  width: 100%;
  flex-grow: 1;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const StyledListItem = styled(ListItem)`
  width: 100%;
`;
