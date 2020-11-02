import PropTypes from 'prop-types';

export const propTypes = {
  children: PropTypes.string,
  variant: PropTypes.oneOf(['normal', 'sub-heading', 'heading']),
};

export const defaultProps = {
  children: '',
  variant: 'normal',
};
