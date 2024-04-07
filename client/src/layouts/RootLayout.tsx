import { Outlet, useLocation } from "react-router-dom";
import SideBarHeader from "../components/SideBarHeader";

const RootLayout = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="flex min-h-screen h-full bg-slate-200">
      {/* SideBar */}
      <div className=" bg-black w-1/5 p-8">
        <SideBarHeader />
        <p className="text-white my-16">Menu</p>
        <ul className="flex flex-col gap-4">
          <li>
            {pathname === "/" ? (
              <button
                className="btn bg-gradient-to-r from-[#30ae1c] to-[#1d8d91] text-white border-none w-full justify-normal h-16"
                aria-disabled
              >
                Dashboard
              </button>
            ) : (
              <button className="btn btn-outline text-white border-none w-full justify-normal h-16">
                Dashboard
              </button>
            )}
          </li>
          <li>
            <button className="btn btn-outline text-white border-none w-full justify-normal h-16">
              Vendor/Supplier
            </button>
          </li>
          <li>
            <button className="btn btn-outline text-white border-none w-full justify-normal h-16">
              Customer/Dealer
            </button>
          </li>
        </ul>
      </div>
      {/* SideBar End */}

      {/* Content */}
      <div>
        <Outlet />
      </div>
      {/* Content End */}
    </div>
  );
};

export default RootLayout;
