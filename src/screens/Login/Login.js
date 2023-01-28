import React from "react";
import LoginForm from "../../components/LoginForm";
import main from "../../../src/assets/image1.jpg";

const Login = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <div className="w-1/2 flex items-center justify-center shrink-0">
        <div className="text-gray-500 mb-10 absolute top-3 left-5">
          <div className="text-2xl font-semibold flex items-center">
            {/* <img
            src="https://investing-iq.netlify.app/static/media/bull-image.83481809a06e40fc7913.png"
            width={50}
            alt="logo"
          /> */}
            Investing IQ
          </div>
          <div>We make investment easy</div>
        </div>
        <LoginForm />
      </div>
      <div className="grow h-full bg-black flex items-center">
        {/* <video autoPlay muted loop>
          <source src={main} type="video/mp4" />
        </video> */}
        <img src={main} alt="logo" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Login;
