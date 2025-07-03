import React from "react";

const ContactUs = () => {
  return (
    <div className="container bg-[#CAC7BF] mx-auto grid">
      <div className="text-[#223531] text-center font-bold text-2xl col-span-10 mt-3">
        Contact Us
      </div>
      <div className="mb-3 col-span-6 col-start-3">
        <div className="text-sm font-bold text-[#223531] mb-1.5">Email :</div>
        <div className="col-span-6">
          <input
            type="email"
            className="bg-white border-0 shadow-2xl rounded-lg h-8 w-full"
          />
        </div>
      </div>
      <div className="col-span-6 col-start-3">
        <div className="text-sm font-bold text-[#223531] mb-1.5">Message :</div>
        <div>
          <textarea
            className="bg-white border-0 shadow-2xl rounded-lg h- w-full"
            textarea
            name=""
            id=""
            rows="8"
          ></textarea>
        </div>
      </div>
      <button className="col-span-6 col-start-3 bg-[#223531] text-white h-9 rounded-lg mt-3 active:translate-y-0.5 cursor-pointer hover:bg-[#2c423d] shadow-xl font-bold mb-5">
        Submit
      </button>
    </div>
  );
};

export default ContactUs;
