import { useParams } from "react-router-dom";
import { jobsList } from "../../utils/dummyData";
import { JobDetails, PortalWrapper } from "../../components";
const JobAndApplicants = () => {
  const { jobId } = useParams();

  return (
    <PortalWrapper>
      <JobDetails jobId={jobId} />
    </PortalWrapper>
  );
};
export { JobAndApplicants };
