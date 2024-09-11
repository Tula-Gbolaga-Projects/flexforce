import { useMemo, useEffect } from "react";
import { Button, PortalWrapper } from "../../components";
import { Table } from "../../components";
import { agencies } from "../../utils/dummyData";
import { useDispatch } from "react-redux";
import { adminGetAgencies } from "../../redux/slices";

const AgencyList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(adminGetAgencies());
  }, []);
  const agencyListColumn = useMemo(
    () => [
      {
        header: "Agency Name",
        accessor: "agencyName",
        cell: (row) => <div className="font-semibold">{row.agencyName}</div>,
      },
      {
        header: "Brief",
        accessor: "agencyBrief",
        cell: (row) => (
          <div className="max-w-xs">
            <p className="truncate" title={row.agencyBrief}>
              {row.agencyBrief}
            </p>
          </div>
        ),
      },
      {
        header: "Email",
        accessor: "email",
        cell: (row) => (
          <a
            href={`mailto:${row.email}`}
            className="text-blue-600 hover:text-blue-800"
          >
            {row.email}
          </a>
        ),
      },
      {
        header: "Address",
        accessor: "address",
        cell: (row) => (
          <div className="max-w-xs truncate" title={row.address}>
            {row.address}
          </div>
        ),
      },
      {
        header: "Primary Staff",
        accessor: "primaryStaff",
        cell: (row) => (
          <div>
            <div>{`${row.primaryStaff.firstName} ${row.primaryStaff.lastName}`}</div>
            <div className="text-sm text-gray-500">
              {row.primaryStaff.email}
            </div>
          </div>
        ),
      },
      {
        header: "Status",
        accessor: "status",
        cell: (row) => {
          let statusColor;
          switch (row.status) {
            case "Approved":
              statusColor = "bg-green-100 text-green-800";
              break;
            case "Pending":
              statusColor = "bg-yellow-100 text-yellow-800";
              break;
            case "Declined":
              statusColor = "bg-red-100 text-red-800";
              break;
            default:
              statusColor = "bg-gray-100 text-gray-800";
          }
          return (
            <span
              className={`px-3 inline-flex leading-5 font-semibold rounded-full ${statusColor}`}
            >
              {row.status}
            </span>
          );
        },
      },
      {
        header: "Action",
        accessor: "action",
        cell: (row) => <Button title={"View"} />,
      },
    ],
    []
  );
  return (
    <PortalWrapper>
      <div className="mx-5">
        <h1 className="text-[20px] text-primary p-5">List of Agencies</h1>
        <Table tableData={agencies} columns={agencyListColumn} />
      </div>
    </PortalWrapper>
  );
};
export { AgencyList };
