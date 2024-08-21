// prop types
import PropTypes from "prop-types";

const ScheduleItem = ({
  wrestling,
  grappling,
  childrenTraining,
  adultsTraining,
}) => {
  return (
    <div className="mb-6 last:mb-0">
      <div className="rounded-md p-3 text-sm md:px-0 md:text-base">
        <div>
          {wrestling && <div className="font-medium">{wrestling}</div>}
          <div>{childrenTraining}</div>
        </div>

        <br />

        {grappling && <div className="font-medium">{grappling}</div>}
        <div>{adultsTraining}</div>
      </div>
    </div>
  );
};

ScheduleItem.propTypes = {
  wrestling: PropTypes.string.isRequired,
  grappling: PropTypes.string.isRequired,
  childrenTraining: PropTypes.string.isRequired,
  adultsTraining: PropTypes.string.isRequired,
};

export default ScheduleItem;
