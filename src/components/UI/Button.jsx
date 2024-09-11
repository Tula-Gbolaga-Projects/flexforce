import { Spinner } from "./Spinner";
const Button = ({ title = "", className = "", onClick = () => {}, status }) => {
  return (
    <button
      className={`bg-[#87ceeb] hover:font-bold  mx-2 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-center items-center
 ${className} `}
      onClick={onClick}
    >
      <span>{title}</span>
      <Spinner
        className="!w-3 !h-3 mx-1 text-white fill-blue-800"
        status={status}
      />
    </button>
  );
};
export { Button };
