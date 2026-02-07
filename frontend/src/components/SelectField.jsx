function SelectField({
  label,
  name,
  value,
  onChange,
  options = [],
  className = '',
  wrapperClassName = '',
  labelClassName = '',
  id,
  placeholder = 'Select an option',
}) {
  return (
    <>
      <div className={wrapperClassName}>
        {label && (
          <label className={`text-xl ${labelClassName}`} htmlFor={id}>
            {label}
          </label>
        )}

        <select
          name={name}
          id={id}
          className={`text-lg w-full border m-4 p-2 rounded-lg ${className}`}
          value={value}
          onChange={onChange}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}

export default SelectField;
