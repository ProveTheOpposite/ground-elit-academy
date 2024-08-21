// prop types
import PropTypes from "prop-types";

const Step = ({ isActive, isCompleted, icon, title, description }) => (
  <div className={`text-center ${isActive ? "text-gray-700" : "opacity-30"}`}>
    <span
      className={`rounded-full ${isActive ? "bg-red-600" : "bg-gray-300"} px-4 py-3.5 text-white`}
    >
      {isCompleted ? <i className="fa-solid fa-check text-lg"></i> : icon}
    </span>
    <h3 className="mb-1 mt-3 text-xl font-bold">{title}</h3>
    <span>{description}</span>
  </div>
);

Step.propTypes = {
  isActive: PropTypes.bool.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Step;
