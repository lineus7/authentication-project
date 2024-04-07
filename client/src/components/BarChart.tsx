import Chart from "react-google-charts";

const data = [
  ["Month", "Value", { role: "style" }],
  ["Jan", 10000, "gold"],
  ["Feb", 20000, "gold"],
  ["Mar", 30000, "gold"],
  ["Apr", 40000, "gold"],
  ["May", 50000, "gold"],
  ["Jun", 60000, "gold"],
  ["Jul", 50000, "gold"],
  ["Aug", 40000, "gold"],
  ["Sep", 30000, "gold"],
  ["Okt", 20000, "gold"],
  ["Nov", 10000, "gold"],
  ["Dec", 5000, "gold"],
];

const BarChart = () => {
  return (
    <div className="card w-2/3 bg-white p-6 text-black min-h-96 flex flex-col">
      <p className=" font-semibold my-4">Aging - Account Receivable</p>
      <div className=" h-full">
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="100%"
          data={data}
          options={{ legend: "none" }}
        />
      </div>
    </div>
  );
};

export default BarChart;
