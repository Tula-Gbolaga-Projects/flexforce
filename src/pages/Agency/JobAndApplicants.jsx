import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { jobsList } from "../../utils/dummyData";
import { JobDetails, PortalWrapper, Table } from "../../components";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaBriefcase,
} from "react-icons/fa";
const JobAndApplicants = () => {
  const { jobId } = useParams();
  const columns = useMemo(
    () => [
      {
        header: "Job Title",
        accessor: "jobTitle",
        cell: (row) => (
          <div className="font-semibold text-gray-900">{row.jobTitle}</div>
        ),
      },
      {
        header: "Location",
        accessor: "location",
        cell: (row) => (
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-gray-400 mr-2" />
            <span>{row.location}</span>
          </div>
        ),
      },
      {
        header: "Pay Rate",
        accessor: "amount",
        cell: (row) => (
          <div className="flex items-center">
            <FaMoneyBillWave className="text-gray-400 mr-2" />
            <span>£{row.amount.toFixed(2)}/h</span>
          </div>
        ),
      },
      {
        header: "Dates",
        accessor: "startDate",
        cell: (row) => (
          <div className="flex items-center">
            <FaCalendarAlt className="text-gray-400 mr-2" />
            <span>
              {row.startDate} - {row.endDate}
            </span>
          </div>
        ),
      },
      {
        header: "Industry",
        accessor: "industry",
        cell: (row) => (
          <div className="flex items-center">
            <FaBriefcase className="text-gray-400 mr-2" />
            <span>{row.industry}</span>
          </div>
        ),
      },
      {
        header: "Agency",
        accessor: "agencyName",
        cell: (row) => (
          <div className="text-sm text-gray-500">{row.agencyName}</div>
        ),
      },
      {
        header: "Status",
        accessor: "myAgency",
        cell: (row) => (
          <div>
            <span
              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                row.myAgency
                  ? "bg-green-100 text-green-800"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {row.myAgency ? "My Agency" : "Other Agency"}
            </span>
            {row.invitedMe && (
              <span className="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                Invited
              </span>
            )}
          </div>
        ),
      },
      {
        header: "Actions",
        accessor: "id",
        cell: (row) => (
          <button
            onClick={(e) => {
              e.stopPropagation();
              // Add your action here, e.g., view details
              console.log("View details for job:", row.id);
            }}
            className="text-indigo-600 hover:text-indigo-900"
          >
            View Details
          </button>
        ),
      },
    ],
    []
  );

  return (
    <PortalWrapper>
      <JobDetails jobId={jobId} />

      <Table tableData={jobsList} columns={columns} onRowClick={() => {}} />
    </PortalWrapper>
  );
};
export { JobAndApplicants };
