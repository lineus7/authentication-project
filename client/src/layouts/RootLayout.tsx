import { Outlet } from "react-router-dom";
import SideBarHeader from "../components/SideBarHeader";
import RootSideBar from "../components/RootSideBar";
import NavBar from "../components/Navbar";

const RootLayout = () => {
  return (
    <div className="flex min-h-screen h-full">
      {/* SideBar */}
      <div className=" bg-black w-1/5 p-8">
        <SideBarHeader />
        <p className="text-white my-16">Menu</p>
        <RootSideBar />
      </div>
      {/* SideBar End */}

      {/* Content */}
      <div className="w-4/5 bg-slate-100">
        {/* NavBar */}
        <NavBar />
        {/* NavBar */}
        <div className="p-4 bg-orange-200">
          <Outlet />
        </div>
      </div>
      {/* Content End */}
    </div>
  );
};

export default RootLayout;
