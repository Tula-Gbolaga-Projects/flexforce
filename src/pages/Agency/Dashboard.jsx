import { OverviewItem, PortalWrapper } from "../../components";

const AgencyDashboard = () => {
  return (
    <PortalWrapper>
      <div className="m-4 rounded bg-gray-100 p-3">
        <h1 className="text-black text-[20px]">Overview</h1>
        <div>
          <OverviewItem count={5} title={"Jobs that have not been matched"} />
          <OverviewItem count={23} title={"Applications that are pending"} />
          <OverviewItem count={113} title={"Shifts scheduled for this week"} />
          <OverviewItem count={15} title={"Shifts that are ongoing"} />
          <OverviewItem count={236} title={"Job seeker onboarding requests"} />
        </div>
      </div>
    </PortalWrapper>
  );
};
export { AgencyDashboard };
