import BarChart from "./BarChart";
import PieChart from "./PieChart";

const MiddleContentHomepage = () => {
  return (
    <>
      <div className="flex gap-4">
        <BarChart />
        <PieChart />
      </div>
    </>
  );
};

export default MiddleContentHomepage;
