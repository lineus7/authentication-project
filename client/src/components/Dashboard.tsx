import DashboardCard from "./DashboardCard";
import DashboardHeader from "./DashboardHeader";
import DashboardTimestamp from "./DashboardTimestamp";

const Dashboard = () => {
  return (
    <div className="card w-full bg-white p-6 text-black">
      <DashboardHeader />

      <div className="divider"></div>

      {/* Content*/}
      <div>
        {/* Timestamp */}
        <DashboardTimestamp />
        {/* Timestamp end */}

        {/* LineGraph Grid */}
        <div className=" grid grid-cols-4 w-full gap-4">
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
        </div>
        {/* LineGraph Grid End */}
      </div>
      {/* Content End */}
    </div>
  );
};

export default Dashboard;
