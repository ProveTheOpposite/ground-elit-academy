// prop types
import PropTypes from "prop-types";

const Button = ({ onClick, type, children, className }) => (
  <button
    onClick={onClick}
    className={`${className ? className : ""} w-full rounded-xl border border-black px-6 py-2 tracking-wider outline-none transition-all duration-75 first:mb-5 active:scale-95 md:w-[140px] md:first:mb-0 ${type === "submit" ? "bg-black hover:opacity-90" : ""}`}
    type={type}
  >
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
