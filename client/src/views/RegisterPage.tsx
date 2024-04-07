import { Link } from "react-router-dom";
import RegisterHeader from "../components/RegisterHeader";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  return (
    <div className=" h-full px-24 py-4 bg-white text-black">
      {/* Register Container */}
      <div className=" h-full">
        <RegisterHeader />
        <p className="text-xl font-semibold my-4 text-green-600">User Info</p>
        <RegisterForm />
        <p className="text-center font-semibold text-green-800 my-0">
          <Link to="/login">Back</Link>
        </p>
      </div>
      {/* End of Register Container */}
    </div>
  );
};

export default RegisterPage;
