import { Outlet } from "react-router-dom";
import RightLoginPanel from "../components/RightLoginPanel";

const LoginLayout = () => {
  return (
    <>
      <div className=" h-screen w-screen flex">
        {/* Left Panel */}
        <div className=" flex-1">
          <Outlet />
        </div>
        {/* Right Panel */}
        <div className=" flex-1 bg-gradient-to-r from-[#30ae1c] to-[#1d8d91] p-16">
          <RightLoginPanel />
        </div>
      </div>
    </>
  );
};

export default LoginLayout;
