import Dashboard from "../components/Dashboard";
import MiddleContentHomepage from "../components/MiddleContentHomepage";

const HomePage = () => {
  return (
    <div className="p-4 h-screen flex flex-col gap-4 overflow-auto">
      <Dashboard />
      <MiddleContentHomepage />
    </div>
  );
};

export default HomePage;
