// prop types
import PropTypes from "prop-types";

const FormField = ({
  id,
  label,
  type,
  placeholder,
  register,
  errors,
  maxLength,
}) => (
  <div className="flex flex-1 flex-col">
    <label className="mb-2 cursor-pointer text-black" htmlFor={id}>
      {label}
    </label>

    <input
      {...register(id)}
      className="w-full rounded-md border border-black py-2 pl-3 pr-2 text-base text-black outline-none"
      type={type}
      id={id}
      placeholder={placeholder}
      maxLength={maxLength}
    />

    {errors && (
      <p className="mt-2 pl-1 text-base text-red-600">
        {" "}
        <i className="fa-solid fa-triangle-exclamation mr-1"></i>{" "}
        {errors.message}
      </p>
    )}
  </div>
);

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func.isRequired,
  maxLength: PropTypes.string,
  errors: PropTypes.object,
};

export default FormField;
