import { useState } from "react";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      {/* Form */}
      <form>
        {/* Email Account */}
        <label className="form-control w-full my-4">
          <div className="label">
            <span className="label-text text-black font-medium text-base">
              Email Account
            </span>
          </div>
          <label className="input input-bordered flex items-center gap-2 bg-[#fafafa]">
            <input
              type="email"
              className="grow h-6"
              placeholder="Email Account"
            />
          </label>
        </label>
        {/* Email Account End */}

        {/* Password */}
        <label className="form-control w-full my-4">
          <div className="label">
            <span className="label-text text-black font-medium text-base">
              Password
            </span>
          </div>
          <label className="input input-bordered flex items-center gap-2 bg-[#fafafa]">
            <input
              type={showPassword ? "text" : "password"}
              className="grow h-6"
              placeholder="Password"
            />
            {!showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="15"
                height="15"
                className=" cursor-pointer"
                onClick={() => setShowPassword(true)}
              >
                <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="15"
                height="15"
                className=" cursor-pointer"
                onClick={() => setShowPassword(false)}
              >
                <path d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            )}
          </label>
        </label>
        {/* Password End */}

        {/* Confirmation Password */}
        <label className="form-control w-full my-4">
          <div className="label">
            <span className="label-text text-black font-medium text-base">
              Confirmation Password
            </span>
          </div>
          <label className="input input-bordered flex items-center gap-2 bg-[#fafafa]">
            <input
              type={showPassword ? "text" : "password"}
              className="grow h-6"
              placeholder="Confirmation Password"
            />
            {!showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="15"
                height="15"
                className=" cursor-pointer"
                onClick={() => setShowPassword(true)}
              >
                <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="15"
                height="15"
                className=" cursor-pointer"
                onClick={() => setShowPassword(false)}
              >
                <path d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            )}
          </label>
        </label>
        {/* Confirmation Password End */}

        {/* Phone Number */}
        <label className="form-control w-full my-4">
          <div className="label">
            <span className="label-text text-black font-medium text-base">
              Phone Number
            </span>
          </div>
          <label className="input input-bordered flex items-center gap-2 bg-[#fafafa]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="email"
              className="grow h-6"
              placeholder="Phone Number"
            />
          </label>
        </label>
        {/* Phone Number End */}
      </form>
      {/* Form End */}

      <button className="btn btn-success w-full text-white my-6">Login</button>
    </>
  );
};

export default RegisterForm;
