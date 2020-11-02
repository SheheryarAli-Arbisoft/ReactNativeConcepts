import PropTypes from 'prop-types';

export const propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
};

export const defaultProps = {
  placeholder: '',
  value: '',
};
