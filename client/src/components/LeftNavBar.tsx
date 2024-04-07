const LeftNavBar = () => {
  return (
    <label className="input input-bordered flex items-center gap-2 bg-[#fafafa] w-2/5 h-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input
        type="text"
        className="grow text-sm"
        placeholder="Search for stocks and more"
      />
    </label>
  );
};

export default LeftNavBar;
