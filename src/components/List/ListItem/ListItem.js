import React from 'react';
import { CustomListItem } from './styled';
import { propTypes, defaultProps } from './props';

export const ListItem = ({ children, ...rest }) => {
  return <CustomListItem {...rest}>{children}</CustomListItem>;
};

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;