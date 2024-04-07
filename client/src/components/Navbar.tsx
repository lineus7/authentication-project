import LeftNavBar from "./LeftNavBar";
import RightNavBar from "./RightNavBar";

const NavBar = () => {
  return (
    <div className=" h-16 bg-white flex justify-between items-center p-4 shadow">
      {/* Left Navbar */}
      <LeftNavBar />
      {/* Left Navbar End */}

      {/* Right Navbar */}
      <RightNavBar />
      {/* Right Navbar End */}
    </div>
  );
};

export default NavBar;
