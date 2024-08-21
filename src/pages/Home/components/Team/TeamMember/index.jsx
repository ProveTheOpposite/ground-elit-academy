// prop types
import PropTypes from "prop-types";

const TeamMember = ({ name, description, imgUrl, reverse }) => {
  return (
    <article
      className={`flex flex-col items-center border-t border-slate-500 p-3 md:py-7 lg:flex-row lg:items-center lg:gap-x-5 ${reverse ? "lg:flex-row-reverse" : ""}`}
    >
      <div className="flex items-center justify-center overflow-hidden md:w-[56%] lg:flex-1">
        <a
          className="flex items-center justify-center"
          target="_blank"
          href={imgUrl}
        >
          <img
            className="rounded-md border border-black transition-transform duration-200 hover:scale-105 min-[500px]:w-[73%] lg:w-[80%] xl:w-[65%] 2xl:w-[60%]"
            src={imgUrl}
            alt={`Photo de ${name}`}
            loading="lazy"
          />
        </a>
      </div>

      <div className="mt-4 text-center lg:flex-1 lg:px-5">
        <h3 className="mb-4 text-xl font-bold lg:text-2xl">{name}</h3>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </article>
  );
};

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
};

export default TeamMember;
