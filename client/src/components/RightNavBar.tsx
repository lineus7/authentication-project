const RightNavBar = () => {
  return (
    <div className="flex w-1/3 items-center gap-4 justify-end">
      {/* Personal Info */}
      <div className="text-right text-sm">
        <p className=" font-bold">User</p>
        <p>user@mail.com</p>
      </div>

      {/* Avatar */}
      <div className="avatar cursor-pointer">
        <div className="w-10 rounded-full">
          <img src="https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </div>
      </div>

      {/* Notification */}
      <div className=" bg-slate-200 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
        >
          <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>
        </svg>
      </div>

      {/* Logout */}
      <div className=" bg-slate-200 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#7ed321"
        >
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" />
        </svg>
      </div>
    </div>
  );
};

export default RightNavBar;
