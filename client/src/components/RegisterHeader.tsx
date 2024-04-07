const RegisterHeader = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-xl font-medium my-6">
        <p>Registration</p>
      </div>
      <div>
        <ul className="steps">
          <li className="step step-success text-sm">User Info</li>
          <li className="step text-sm">Company Info</li>
          <li className="step text-sm">Package</li>
        </ul>
      </div>
      {/* <div className=" bg-gradient-to-r from-[#30ae1c] to-[#1d8d91] text-white text-2xl font-semibold rounded-full size-8 flex justify-center items-center">
        B
      </div>
      <p className="text-xl ml-4 font-semibold">B2b Portal</p> */}
    </div>
  );
};

export default RegisterHeader;
