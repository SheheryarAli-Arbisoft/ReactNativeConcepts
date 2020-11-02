import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyledList, StyledListItem } from './styled';
import { propTypes, defaultProps } from './props';

export const List = ({ data, onRemove: handleRemove, ...rest }) => {
  const renderListItem = ({ item: { id, description } }) => (
    <StyledListItem bottomDivider>
      <StyledListItem.Content>
        <StyledListItem.Title>{description}</StyledListItem.Title>
      </StyledListItem.Content>
      <Icon name='close-circle' size={24} onPress={() => handleRemove(id)} />
    </StyledListItem>
  );

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
