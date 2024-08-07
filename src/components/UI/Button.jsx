const Button = ({ title = "", className = "", onClick = () => {} }) => {
  return (
    <button
      className={`bg-[#87ceeb] hover:font-bold  mx-2 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline
 ${className} `}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
export { Button };
