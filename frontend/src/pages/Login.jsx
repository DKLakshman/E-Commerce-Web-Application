import React from "react";
import LoginImg from "../assets/login/LoginImg.jpg";

const Login = () => {
  return (
    <div className="bg-[#CAC7BF] min-h-screen grid grid-cols-12 items-center px-4">
      <div className="col-span-10 md:col-span-10  lg:col-span-8 lg:col-start-3 col-start-2 md:col-start-2 h-max bg-white rounded-2xl p-8 md:p-8 grid grid-cols-2 md:grid-cols-10 lg:grid-cols-6 gap-6 mt-4 items-center shadow-xl">
        <div className="col-span-2 md:col-span-5 lg:col-span-3">
          <div className="text-[36px] font-bold pb-2 text-[#223531] text-center">
            Sign In
          </div>
          <div className="pb-3 text-lg text-center text-[#78746D]">Welcome Back to our store</div>
          {/* Email */}
          <div className="pb-3">
            <p className="text-[13px] text-[#78746D]">Email</p>
            <input
              className="bg-[#e6e3db] w-full h-9 rounded-lg p-2  shadow-xl"
              type="email"
            />
          </div>

          {/* Password */}
          <div className="pb-2">
            <p className="text-[13px] text-[#78746D]">Password</p>
            <input
              className="bg-[#e6e3db] w-full h-9 rounded-lg p-2 shadow-xl"
              type="password"
            />
          </div>
          <div className="flex justify-end text-[14px] cursor-pointer text-[#78746D]">Forget password?</div>
          {/* Sign In Button */}
          <button className="w-full bg-[#223531] text-white h-9 rounded-lg mt-3 active:translate-y-0.5 cursor-pointer hover:bg-[#2c423d] shadow-xl font-bold">
            Sign In
          </button>
          <div className="text-sm text-center pt-4 text-[#78746D]">
            Don't have an account?{" "}
            <a href="/register">
              <u>Sign Up</u>
            </a>{" "}
          </div>
        </div>

        {/* Right Image Section */}
        <div className="col-span-2 md:col-span-5 lg:col-span-3 hidden md:block">
          <img
            className="w-full h-130  rounded-xl shadow-xl"
            src={LoginImg}
            alt="Sign Up"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
