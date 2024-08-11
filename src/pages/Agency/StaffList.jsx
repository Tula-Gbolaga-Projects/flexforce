import { useMemo } from "react";
import { Button, PortalWrapper, Table } from "../../components";
import { staffList } from "../../utils/dummyData";

const StaffList = () => {
  const staffListColumn = useMemo(
    () => [
      {
        header: "Profile",
        accessor: "profileImage",
        cell: (row) => (
          <div className="flex items-center justify-center">
            <img
              src={row.profileImage}
              alt={`${row.firstName} ${row.lastName}`}
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>
        ),
      },
      {
        header: "First Name",
        accessor: "firstName",
      },
      {
        header: "Last Name",
        accessor: "lastName",
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
        header: "Phone Number",
        accessor: "phoneNumber",
        cell: (row) => (
          <a
            href={`tel:${row.phoneNumber}`}
            className="text-blue-600 hover:text-blue-800"
          >
            {row.phoneNumber}
          </a>
        ),
      },
      {
        header: "Status",
        accessor: "status",
        cell: (row) => {
          let statusColor;
          switch (row.status) {
            case "active":
              statusColor = "bg-green-100 text-green-800";
              break;
            case "pending":
              statusColor = "bg-yellow-100 text-yellow-800";
              break;
            case "inactive":
              statusColor = "bg-red-100 text-red-800";
              break;
            default:
              statusColor = "bg-gray-100 text-gray-800";
          }
          return (
            <span
              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor}`}
            >
              {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
            </span>
          );
        },
      },
    ],
    []
  );
  return (
    <PortalWrapper>
      <div className="m-3 rounded">
        <h1 className="text-primary text-[20px]">Staff List</h1>
        <div className="p-5 flex justify-center">
          {" "}
          <Button title="Invite Staff" />
        </div>
        <Table tableData={staffList} columns={staffListColumn} />
      </div>
    </PortalWrapper>
  );
};

export { StaffList };
