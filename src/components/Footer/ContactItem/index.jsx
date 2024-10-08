// prop types
import PropTypes from "prop-types";

const ContactItem = ({ icon, children, link, className }) => (
  <span className={`${className ? className : ""}`}>
    <i className={`${icon} mr-4`}></i>
    {link ? (
      <a href={link} className="hover:underline" target="_blank">
        {children}
      </a>
    ) : (
      <>{children}</>
    )}
  </span>
);

ContactItem.propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  link: PropTypes.string,
  className: PropTypes.string,
};

export default ContactItem;
