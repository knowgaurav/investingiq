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
    <form className="w-96" onSubmit={handleSubmit}>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      <div className="text-center my-5">or</div>
      <div className="flex flex-col gap-3">
        <div>
          <div>Email</div>
          <input
            type="text"
            className="border-2 border-gray-200 w-full p-2 rounded-md outline-none"
          />
        </div>
        <div>
          <div>Password</div>
          <input
            type="password"
            className="border-2 border-gray-200 w-full p-2 rounded-md outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-900 text-white rounded-md w-full mt-4 p-2"
        >
          Log in
        </button>
        <div className="flex justify-center text-gray-400">
          Don't have an account?{" "}
          <span className="ml-1 cursor-pointer hover:text-black text-gray-500">
            Sign up for free
          </span>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
