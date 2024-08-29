// prop types
import PropTypes from "prop-types";

const FormField = ({
  className,
  id,
  label,
  register,
  type,
  placeholder,
  icon,
  errors,
}) => {
  return (
    <div className={`${className ? className : ""} relative flex flex-col`}>
      <label className="mb-1 ml-1 font-bold lg:mb-2" htmlFor={id}>
        {label}
      </label>

      <input
        {...register(id)}
        className="rounded-2xl border border-slate-500 bg-transparent py-2 pl-9 placeholder:pl-1 focus:border-transparent focus:outline-2 focus:outline-[#b0181c] md:pl-11"
        type={type}
        id={id}
        placeholder={placeholder}
      />

      <i
        className={`fa-solid fa-${icon} absolute bottom-3 left-3.5 focus:text-[#b0181c] md:bottom-3.5 md:left-4`}
      ></i>

      {errors && (
        <p className="absolute -bottom-6 left-1 text-sm text-red-600 md:-bottom-7 md:text-base">
          {" "}
          <i className="fa-solid fa-triangle-exclamation mr-1"></i>{" "}
          {errors.message}
        </p>
      )}
    </div>
  );
};

FormField.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  errors: PropTypes.object,
};

export default FormField;
