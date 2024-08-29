// prop types
import PropTypes from "prop-types";

const Button = ({ children, className, type }) => {
  return (
    <button
      className={`rounded-full px-5 py-3 text-sm outline-none transition-all duration-75 active:scale-95 md:text-base ${className ? className : ""}`}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
