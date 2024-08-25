// prop types
import PropTypes from "prop-types";

const ScheduleItem = ({ kids, adults, childrenTraining, adultsTraining }) => {
  return (
    <div className="mb-6 last:mb-0">
      <div className="rounded-md p-3 text-sm md:px-0 md:text-base">
        <div>
          {kids && <div className="font-medium">{kids}</div>}
          <div>{childrenTraining}</div>
        </div>

        <br />

        {adults && <div className="font-medium">{adults}</div>}
        <div>{adultsTraining}</div>
      </div>
    </div>
  );
};

ScheduleItem.propTypes = {
  kids: PropTypes.string.isRequired,
  adults: PropTypes.string.isRequired,
  childrenTraining: PropTypes.string.isRequired,
  adultsTraining: PropTypes.string.isRequired,
};

export default ScheduleItem;
