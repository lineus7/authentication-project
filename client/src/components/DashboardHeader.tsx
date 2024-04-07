const DashboardHeader = () => {
  return (
    <div className="flex justify-between">
      <div>
        <p className=" font-semibold">Dashboard</p>
        <p className=" text-slate-400 text-sm">
          These companies have a dashboard
        </p>
      </div>
      <div>
        <button className="btn btn-outline btn-success h">Import Data</button>
      </div>
    </div>
  );
};

export default DashboardHeader;
