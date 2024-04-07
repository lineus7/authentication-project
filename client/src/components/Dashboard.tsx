import DashboardHeader from "./DashboardHeader";
import DashboardTimestamp from "./DashboardTimestamp";

const Dashboard = () => {
  return (
    <div className="card w-full bg-white p-6 text-black">
      <DashboardHeader />
      <div className="divider"></div>
      {/* Line Graph*/}
      <div>
        {/* Timestamp */}
        <DashboardTimestamp />
        {/* Timestamp end */}

        {/* LineGraph Card Container */}
        <div className=" grid grid-cols-4 w-full gap-4">
          <div className=" rounded-xl border border-neutral-content cursor-pointer h-32 p-4 flex">
            <div className="w-3/5">Vendor/Supplier</div>
            <div className="w-2/5">Test</div>
          </div>
        </div>
        {/* LineGraph Card Container End */}
      </div>
      {/* Line Graph End */}
    </div>
  );
};

export default Dashboard;
