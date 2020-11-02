import PropTypes from 'prop-types';

export const propTypes = {
  title: PropTypes.string,
  containerStyle: PropTypes.object,
  titleStyle: PropTypes.object,
};

export const defaultProps = {
  title: '',
  containerStyle: {
    width: '100%',
  },
  titleStyle: {
    fontSize: 20,
    textTransform: 'uppercase',
  },
};
