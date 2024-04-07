import Dashboard from "../components/Dashboard";
import MiddleContentHomepage from "../components/MiddleContentHomepage";
import RecentOrder from "../components/RecentOrder";

const HomePage = () => {
  return (
    <div className="p-4 h-screen flex flex-col gap-4 overflow-auto">
      <Dashboard />
      <MiddleContentHomepage />
      <RecentOrder />
    </div>
  );
};

export default HomePage;
