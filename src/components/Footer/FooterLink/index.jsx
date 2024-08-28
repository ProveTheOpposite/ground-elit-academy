// react router dom
import { Link } from "react-router-dom";
// prop types
import PropTypes from "prop-types";

const FooterLink = ({ to, children }) => (
  <Link to={to} className="text-sm hover:underline md:text-base">
    {children}
  </Link>
);

FooterLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FooterLink;
