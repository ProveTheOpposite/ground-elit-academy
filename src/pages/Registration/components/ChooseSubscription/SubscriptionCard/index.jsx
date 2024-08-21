// hook
import { useRecoilValue } from "recoil";
// atom
import { languageState } from "src/recoil";
// prop types
import PropTypes from "prop-types";
// assets
import translations from "src/language/translations";

const SubscriptionCard = ({ price, description, buttonText, onClick }) => {
  const language = useRecoilValue(languageState);

  return (
    <div className="flex flex-col rounded-md bg-white px-10 py-9 shadow-lg">
      <h3 className="mb-5 text-xl font-bold">
        {translations[language].registration.chooseSubscription.subTitle}
      </h3>

      <div className="mb-2">
        <span className="specially text-3xl font-bold">{price}</span>
        <span className="ml-4 opacity-60">
          {translations[language].registration.chooseSubscription.perMonth}
        </span>
      </div>

      <span>{description}</span>

      <button
        onClick={onClick}
        type="button"
        className="mt-8 rounded-md bg-black py-2 font-bold tracking-wider text-white transition-all active:scale-95"
      >
        {buttonText}
      </button>
    </div>
  );
};

SubscriptionCard.propTypes = {
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SubscriptionCard;
