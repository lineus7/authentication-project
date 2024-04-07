const DashboardTimestamp = () => {
  return (
    <div>
      <ul className="flex gap-4 mb-6">
        <li>
          <button className="btn btn-outline h-8 hover:bg-green-600 border-neutral-content hover:border-neutral-content">
            12 Months
          </button>
        </li>
        <li>
          <button className="btn btn-outline h-8 hover:bg-green-600 border-neutral-content hover:border-neutral-content">
            6 Months
          </button>
        </li>
        <li>
          <button className="btn btn-outline h-8 hover:bg-green-600 border-neutral-content hover:border-neutral-content">
            3 Months
          </button>
        </li>
        <li>
          <button className="btn h-8 bg-green-600 border-neutral-content text-white">
            30 Days
          </button>
        </li>
        <li>
          <button className="btn btn-outline h-8 hover:bg-green-600 border-neutral-content hover:border-neutral-content">
            7 Days
          </button>
        </li>
        <li>
          <button className="btn btn-outline h-8 hover:bg-green-600 border-neutral-content hover:border-neutral-content">
            24 Hours
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DashboardTimestamp;
