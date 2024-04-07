import { useLocation } from "react-router-dom";

const RootSideBar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <ul className="flex flex-col gap-4">
      <li>
        {pathname === "/" ? (
          <button
            className="btn bg-gradient-to-r from-[#30ae1c] to-[#1d8d91] text-white border-none w-full justify-normal h-12"
            aria-disabled
          >
            Dashboard
          </button>
        ) : (
          <button className="btn btn-outline text-white border-none w-full justify-normal h-12">
            Dashboard
          </button>
        )}
      </li>
      <li>
        <button className="btn btn-outline text-white border-none w-full justify-normal h-12">
          Vendor/Supplier
        </button>
      </li>
      <li>
        <button className="btn btn-outline text-white border-none w-full justify-normal h-12">
          Customer/Dealer
        </button>
      </li>
    </ul>
  );
};

export default RootSideBar;
