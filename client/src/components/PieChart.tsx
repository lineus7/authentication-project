import Chart from "react-google-charts";

const data = [
  ["Series", "Value"],
  ["Series 1", 5],
  ["Series 2", 10],
  ["Series 3", 20],
];

const options = {
  pieSliceText: "none",
  slices: {
    0: { color: "lightgreen" },
    1: { color: "green" },
    2: { color: "darkgreen" },
  },
};

const PieChart = () => {
  return (
    <div className="card w-1/3 bg-white p-6 text-black bg-gre">
      {/* Header */}
      <div className="flex justify-between">
        <div>
          <p className="font-semibold">Revenue</p>
        </div>
        <div>
          <p className=" font-semibold text-green-600 cursor-pointer">
            View All
          </p>
        </div>
      </div>
      {/* Header End */}

      {/* Pie */}
      <div className=" h-full bg-slate-200">
        <Chart
          chartType="PieChart"
          width="100%"
          height="100%"
          data={data}
          options={options}
        />
      </div>
      {/* Pie End */}
    </div>
  );
};

export default PieChart;
