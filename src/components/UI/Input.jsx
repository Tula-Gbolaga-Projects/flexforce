const Input = ({
  label,
  type = "text",
  placeholder,
  errorMsg,
  value,
  setValue,
  ...others
}) => {
  return (
    <div className="my-2">
      <label
        className="block text-gray-700 text-sm  mb-2"
        for={label?.replace(" ", "")}
      >
        {label}
      </label>

      <input
        type={type}
        value={value}
        id={label?.replace(" ", "")}
        placeholder={placeholder}
        className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onClick={setValue}
        {...others}
      />
      {errorMsg && (
        <p className="text-red-500 text-center italic">{errorMsg}</p>
      )}
    </div>
  );
};
export { Input };
