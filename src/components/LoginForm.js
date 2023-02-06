import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <form className="w-2/5" onSubmit={handleSubmit}>
      {/* <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      <div className="text-center my-5">or</div> */}
      <div className="text-2xl font-bold mb-8">Welcome Back</div>
      <div className="flex flex-col gap-5">
        <div>
          <div className="font-medium">Email</div>
          <input
            type="text"
            placeholder="Enter you email"
            className="border-2 border-gray-200 w-full p-2 rounded-md outline-none"
          />
        </div>
        <div>
          <div className="font-medium">Password</div>
          <input
            type="password"
            placeholder="Enter your password"
            className="border-2 border-gray-200 w-full p-2 rounded-md outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white rounded-md w-full mt-4 p-2"
        >
          Log in
        </button>
        <div className="flex justify-center text-gray-400 font-medium">
          Don't have an account?{" "}
          <span className="ml-1 text-black underline cursor-pointer hover:text-gray-500 text-gray-500">
            Sign up
          </span>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
