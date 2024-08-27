// prop types
import PropTypes from "prop-types";

const TeamMember = ({ name, description, imgUrl, reverse }) => {
  return (
    <article
      className={`flex flex-col items-center border-t border-slate-500 p-3 md:py-7 lg:flex-row lg:items-center lg:gap-x-5 ${reverse ? "lg:flex-row-reverse" : ""}`}
    >
      <div className="md:w-[56%] lg:flex-1">
        <a
          href={imgUrl}
          className="block overflow-hidden rounded-md border border-black min-[500px]:mx-auto min-[500px]:w-[73%] lg:w-[80%] xl:w-[65%] 2xl:w-[60%]"
          target="_blank"
        >
          <img
            className="w-full transition-transform duration-200 hover:scale-105"
            src={imgUrl}
            alt={`Photo de ${name}`}
            loading="lazy"
          />
        </a>
      </div>

      <div className="mt-4 text-center lg:flex-1 lg:px-5">
        {/* mobile */}
        <h3 className="mb-4 text-xl font-bold md:hidden lg:text-2xl">{name}</h3>
        <p className="px-2 text-justify text-sm leading-relaxed md:hidden">
          {description}
        </p>
        {/* tablet and more */}
        <div className="hidden md:mx-auto md:block md:w-[85%]">
          <h3 className="md:mb-4 md:text-xl md:font-bold lg:text-2xl">
            {name}
          </h3>
          <p className="md:text-base md:leading-relaxed">{description}</p>
        </div>
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
