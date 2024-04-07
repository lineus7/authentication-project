import { Outlet } from "react-router-dom";
import logisticImage from "/logistic.png";

const LoginLayout = () => {
  return (
    <>
      <div className=" h-screen w-screen flex bg-slate-200">
        {/* Left Panel */}
        <div className=" flex-1">
          <Outlet />
        </div>
        {/* Right Panel */}
        <div className=" flex-1 bg-gradient-to-r from-[#30ae1c] to-[#1d8d91] p-16">
          <div className="h-full">
            {/* Image Container */}
            <div className=" h-2/3 flex justify-center items-center">
              <img
                src={logisticImage}
                alt="logistic-image"
                className=" h-full w-full object-contain"
              />
            </div>
            {/* End of Image Container */}
            {/* Text Container */}
            <div className="h-1/3  flex flex-col items-center py-4 px-24 text-white">
              <p className=" font-semibold text-3xl text-center">
                Empowering your business with the tool of succeed
              </p>
              <p className=" text-center text-xl mt-4">
                Such as easy-to-use collaboration tools, advanced data
                analytics, and streamlined communication channels
              </p>
            </div>
            {/* End of Text Container */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginLayout;
