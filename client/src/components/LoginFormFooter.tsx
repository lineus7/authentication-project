const LoginFormFooter = () => {
  return (
    <div className="flex justify-between my-6">
      {/* Remember Me */}
      <div className="flex justify-center items-center">
        <input type="checkbox" name="radio-1" className="radio" />
        <label className="label-text text-black font-medium text-base mx-4">
          Remember Me
        </label>
      </div>
      {/* Remember Me End */}
      <div>
        <p className="label-text text-green-600 font-medium text-base cursor-pointer">
          Forgot Password?
        </p>
      </div>
    </div>
  );
};

export default LoginFormFooter;
