// prop types
import PropTypes from "prop-types";

const Day = ({ name }) => (
  <div className="text-sm font-medium md:text-base">{name}</div>
);

Day.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Day;
