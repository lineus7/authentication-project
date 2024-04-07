import LoginForm from "../components/LoginForm";
import LoginHeader from "../components/LoginHeader";

const LoginPage = () => {
  return (
    <div className=" h-full p-24 bg-white text-black">
      {/* Login Container */}
      <div className=" h-full">
        <LoginHeader />
        <p className="text-2xl font-semibold my-8">Login to your account</p>
        <LoginForm />
        {/* OAuth */}
        <div className="flex gap-4 my-6">
          <button className="btn flex-1 border-slate-300">Google</button>
          <button className="btn flex-1 border-slate-300">Facebook</button>
        </div>

        <p>
          Don't have an account?{" "}
          <span className=" text-green-600 cursor-pointer">Get Started</span>
        </p>
        {/* OAuth end */}
      </div>
      {/* End of Login Container */}
    </div>
  );
};

export default LoginPage;
