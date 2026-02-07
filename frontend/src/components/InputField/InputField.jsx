function InputField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  className = '',
  wrapperClassName = '',
  labelClassName = '',
  id,
}) {
  return (
    <>
      <div className={wrapperClassName}>
        {label && (
          <label className={`text-xl ${labelClassName}`} htmlFor={id}>
            {label}
          </label>
        )}

        <input
          id={id}
          name={name}
          className={`text-lg w-full border m-4 p-2 rounded-lg ${className}`}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </>
  );
}

export default InputField;
