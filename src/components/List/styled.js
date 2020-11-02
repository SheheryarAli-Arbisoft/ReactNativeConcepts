import styled from 'styled-components';
import { ListItem } from 'react-native-elements';

export const StyledList = styled.FlatList`
  width: 100%;
  flex-grow: 1;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const StyledListItem = styled(ListItem)`
  width: 100%;
`;
