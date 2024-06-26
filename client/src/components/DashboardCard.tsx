//@ts-ignore
import LineGraph from "react-line-graph";

const DashboardCard = ({ isPositive }: { isPositive: boolean }) => {
  const props = {
    data: isPositive ? [10, 20, 15, 25, 20] : [20, 25, 15, 20, 10],
    smoothing: 1,
    accent: isPositive ? "rgb(22 163 74)" : "red",
    fillBelow: isPositive ? "#d1fadf" : "rgb(254, 202, 202)",
    width: "100%",
    height: "50%",
  };
  return (
    <div className=" rounded-xl border border-neutral-content cursor-pointer h-32 p-4 flex flex-col bg-re">
      {/* Card Header */}
      <div className="text-sm font-semibold flex justify-between items-center">
        <div>Vendor/Supplier</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          className=" cursor-pointer"
        >
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="12" cy="5" r="1"></circle>
          <circle cx="12" cy="19" r="1"></circle>
        </svg>
      </div>
      {/* Card Header End */}

      {/* Card Body */}
      <div className="flex flex-1">
        {/* Left Body */}
        <div className="w-3/5 flex flex-col justify-between">
          <div className="my-2 font-bold text-2xl">
            <p>{isPositive ? "1000" : "993"}</p>
          </div>
          <div className="text-sm flex items-center">
            {isPositive ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7ed321"
              >
                <path d="M12 19V6M5 12l7-7 7 7" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="red"
              >
                <path d="M12 5v13M5 12l7 7 7-7" />
              </svg>
            )}

            {isPositive ? (
              <p>
                <span className=" text-green-600 font-bold">23%</span> Last
                month
              </p>
            ) : (
              <p>
                <span className=" text-red-600 font-bold">19%</span> Last month
              </p>
            )}
          </div>
        </div>

        {/* Right Body */}
        <div className="w-2/5 flex items-center justify-center">
          <LineGraph {...props} />
        </div>
      </div>
      {/* Card Body End */}
    </div>
  );
};

export default DashboardCard;
