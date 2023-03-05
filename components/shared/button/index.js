import PropTypes from 'prop-types';

function Button({ variant, children, type, path, target }) {
  switch (type) {
    case 'link':
      return (
        <a href={path} className={`button ${variant}`} target={target}>
          {children}
        </a>
      );
    default:
      return (
        <button type="button" className={`button ${variant}`}>
          {children}
        </button>
      );
  }
}

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
  path: PropTypes.string,
};
export default Button;
