// Props validation
import PropTypes from "prop-types";

const IconWrapper = ({ icon }) => (
  <div
    className="flex items-center justify-center rounded-[10px] bg-red-600 bg-opacity-10"
    style={{ width: "40px", height: "40px" }}
  >
    <span className="text-sm md:text-base">
      <i className={`fa-solid ${icon} text-red-600`}></i>
    </span>
  </div>
);

IconWrapper.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default IconWrapper;
