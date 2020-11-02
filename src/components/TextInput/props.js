import PropTypes from 'prop-types';

export const propTypes = {
  onChangeText: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

export const defaultProps = {
  value: '',
  placeholder: '',
};
