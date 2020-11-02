import React from 'react';
import { StyledList, StyledListItem } from './styled';
import { propTypes, defaultProps } from './props';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const renderListItem = ({ item: { description } }) => (
  <StyledListItem>
    <StyledListItem.Content>
      <StyledListItem.Title>{description}</StyledListItem.Title>
    </StyledListItem.Content>
    <Icon name='close-circle' size={24} />
  </StyledListItem>
);

export const List = ({ data, ...rest }) => {
  return (
    <StyledList
      data={data}
      renderItem={renderListItem}
      keyExtractor={item => `${item.id}`}
      {...rest}
    />
  );
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;
