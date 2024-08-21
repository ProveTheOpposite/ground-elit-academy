// prop types
import PropTypes from "prop-types";

const InfoField = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="mb-1 font-thin text-neutral-400">{label}</span>
    <span className="font-bold">{value}</span>
  </div>
);

InfoField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
};

export default InfoField;
