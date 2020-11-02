import PropTypes from 'prop-types';

export const propTypes = {
  children: PropTypes.string,
  centered: PropTypes.bool,
  colorWhite: PropTypes.bool,
  fontBold: PropTypes.bool,
  paddingY: PropTypes.bool,
  variant: PropTypes.oneOf(['normal', 'heading']),
};

export const defaultProps = {
  children: '',
  centered: false,
  colorWhite: false,
  fontBold: false,
  paddingY: false,
  variant: 'normal',
};
