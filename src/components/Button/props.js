import PropTypes from 'prop-types';

export const propTypes = {
  value: PropTypes.string,
  onPress: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['normal', 'large']),
};

export const defaultProps = {
  value: '',
  onPress: () => {},
  variant: 'primary',
  size: 'normal',
};
