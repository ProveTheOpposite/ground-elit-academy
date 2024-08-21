// prop types
import PropTypes from "prop-types";

const StepConnector = ({ isActive }) => (
  <span
    className={`mb-6 mt-4 h-24 w-0.5 lg:mx-4 lg:my-0 lg:h-0.5 lg:w-20 xl:w-32 ${isActive ? "bg-red-600" : "bg-slate-300"}`}
  ></span>
);

StepConnector.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default StepConnector;
