import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import RegisterHeader from "../components/RegisterHeader";

const RegisterPage = () => {
  return (
    <div className=" h-full p-24 bg-white text-black">
      {/* Login Container */}
      <div className=" h-full">
        <RegisterHeader />
        <p className="text-2xl font-semibold my-8 text-green-600">User Info</p>
        <LoginForm />
        {/* OAuth */}
        <div className="flex gap-4 my-6">
          <button className="btn flex-1 border-slate-300">Google</button>
          <button className="btn flex-1 border-slate-300">Facebook</button>
        </div>

        <p>
          Don't have an account?{" "}
          <span className=" text-green-600">
            <Link to="/register">Get Started</Link>
          </span>
        </p>
        {/* OAuth end */}
      </div>
      {/* End of Login Container */}
    </div>
  );
};

export default RegisterPage;
