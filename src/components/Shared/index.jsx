const OverviewItem = ({ title, count }) => {
  return (
    <div className=" group flex items-stretch hover:shadow hover:shadow-primary mb-3   ">
      <div className="flex-none w-10 min-h-10 bg-primary flex items-center justify-center text-[20px] !hover:no-underline">
        {count}
      </div>
      <div className="flex-grow min-h-10 border-2 border-primary flex items-center">
        <p className="text-black p-2 group-hover:underline group-hover:decoration-black ">
          {title}
        </p>
      </div>
    </div>
  );
};

export { OverviewItem };
