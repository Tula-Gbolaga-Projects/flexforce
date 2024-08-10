import { useMemo } from "react";
import { Button, Dropdown, JobSummary, PortalWrapper } from "../../components";
import { jobsList } from "../../utils/dummyData";

const Jobs = () => {
  const slicedJobs = useMemo(() => {
    return jobsList.slice(0, 10);
  }, []);
  return (
    <PortalWrapper>
      <h1 className="text-primary text-center text-[20px]">Explore Jobs</h1>
      <div className="md:px-[100px] m-1">
        <div className=" shadow shadow-primary p-2 rounded-lg  my-3">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Dropdown label={"Select City"} />
            <Dropdown label={"Select Industry"} />
            <Dropdown label={"Select Role"} />
            <Dropdown label={"Select Group"} />
          </div>
          <div className="flex justify-center my-2">
            {" "}
            <Button title="Apply" />
          </div>
        </div>
        <p className="text-black">Showing 1- 10 of 31</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {slicedJobs?.map((data) => {
            return <JobSummary data={data} />;
          })}
        </div>

        <div className="flex justify-center my-8">
          {" "}
          <Button title="Prev" /> <Button title="Next" />{" "}
        </div>
      </div>
    </PortalWrapper>
  );
};
export { Jobs };
