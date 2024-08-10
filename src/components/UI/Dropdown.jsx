const Dropdown = ({ label, options }) => {
  return (
    <div>
      <label
        className="block text-gray-700 text-sm  mb-2"
        for={label?.replace(" ", "")}
      >
        {label}
      </label>

      <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
        <option>Select All</option>
        {options?.map((data) => {
          return <option value={data?.id}> {data?.title}</option>;
        })}
      </select>
    </div>
  );
};
export { Dropdown };
