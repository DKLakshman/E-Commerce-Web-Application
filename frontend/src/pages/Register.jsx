import React from "react";
// import RegisterImg from "../assets/register/RegisterImg.jpeg";
import RegisterImg from "../assets/register/RegisterImg1.jpg";

const Register = () => {
  return (
    <div className="bg-[#CAC7BF] min-h-screen grid grid-cols-12 items-center px-4">
      <div className="col-span-10 md:col-span-10  lg:col-span-8 lg:col-start-3 col-start-2 md:col-start-2 h-max bg-white rounded-2xl p-8 md:p-8 grid grid-cols-2 md:grid-cols-10 lg:grid-cols-6 gap-6 mt-4 shadow-xl">
        <div className="col-span-2 md:col-span-5 lg:col-span-3">
          <div className="text-[33px] font-bold pb-1 text-[#223531] text-center">
            Sign Up
          </div>
          <div className="pb-3 text-sm text-[#78746D] text-center">
           Welcome , Let's start with some facts about you
          </div>

          {/* First & Last Name */}
          <div className="flex flex-col md:flex-row gap-3 pb-3">
            <div className="w-full">
              <p className="text-[13px] text-[#78746D]">First Name</p>
              <input
                className="bg-[#e6e3db] w-full h-9 rounded-lg p-2 shadow-lg"
                type="text"
              />
            </div>
            <div className="w-full">
              <p className="text-[13px] text-[#78746D]">Last Name</p>
              <input
                className="bg-[#e6e3db] w-full h-9 rounded-lg p-2 shadow-lg"
                type="text"
              />
            </div>
          </div>

          {/* Email */}
          <div className="pb-3">
            <p className="text-[13px] text-[#78746D]">Email</p>
            <input
              className="bg-[#e6e3db] w-full h-9 rounded-lg p-2 shadow-lg"
              type="email"
            />
          </div>

          {/* Password */}
          <div className="pb-3">
            <p className="text-[13px] text-[#78746D]">Password</p>
            <input
              className="bg-[#e6e3db] w-full h-9 rounded-lg p-2 shadow-lg"
              type="password"
            />
          </div>

          {/* Re-enter Password */}
          <div className="pb-3">
            <p className="text-[13px] text-[#78746D]">Re-enter Password</p>
            <input
              className="bg-[#e6e3db] w-full h-9 rounded-lg p-2 shadow-lg"
              type="password"
            />
          </div>

          {/* Phone */}
          <div className="pb-3">
            <p className="text-[13px] text-[#78746D]">Phone</p>
            <input
              className="bg-[#e6e3db] w-full h-9 rounded-lg p-2 shadow-lg"
              type="number"
            />
          </div>

          {/* Sign Up Button */}
          <button className="w-full bg-[#223531] text-white h-9 rounded-lg mt-3 active:translate-y-0.5 cursor-pointer hover:bg-[#2c423d] shadow-xl font-bold">
            Sign Up
          </button>
           <div className="text-sm text-center pt-4 text-[#78746D]">Already have an account? <a href="/login"><u>Sign In</u></a> </div>
        </div>

        {/* Right Image Section */}
        <div className="col-span-2 md:col-span-5 lg:col-span-3 hidden md:block">
          <img
            className="w-full h-130  rounded-xl shadow-xl"
            src={RegisterImg}
            alt="Sign Up"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
