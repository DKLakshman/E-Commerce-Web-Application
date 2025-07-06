import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-[#9e9b95]" >
      <div className="container mx-auto">
        <div className="grid grid-cols-13 pt-8">
          <div className="col-span-13 sm:col-span-3 sm:col-start-2 text-center">
            <div className="mb-5 text-[15px] sm:text-xl font-bold text-[#223531]">Customer care</div>
            {/* test */}
            <div className="mb-3 text-[13px] sm:text-sm cursor-pointer"><a href="http://" target="_blank" rel="noopener noreferrer">FAQ</a></div> 
            <div className="mb-3 text-[13px] sm:text-sm cursor-pointer"><a href="http://" target="_blank" rel="noopener noreferrer">Track Your Order</a></div>
            <div className="mb-3 text-[13px] sm:text-sm cursor-pointer"><a href="http://" target="_blank" rel="noopener noreferrer">Returns</a></div>
            <div className="mb-3 text-sm cursor-pointer">Contact Us</div>
          </div>
          <div className="col-span-13 sm:col-span-3 sm:col-start-6 text-center">
            <div className="mb-5 text-[15px] sm:text-xl font-bold text-[#223531]">Information</div>
            <div className="mb-3 text-[13px] sm:text-sm cursor-pointer"><a href="http://" target="_blank" rel="noopener noreferrer">Size Guide</a></div>
            <div className="mb-3 text-[13px] sm:text-sm cursor-pointer"><a href="http://" target="_blank" rel="noopener noreferrer">Term & condition</a></div>
            <div className="mb-3 text-[13px] sm:text-sm cursor-pointer"><a href="http://" target="_blank" rel="noopener noreferrer">About Us</a></div>
          </div>
          <div className="col-span-13 sm:col-span-3 sm:col-start-10 text-center">
            <div className="mb-5 text-[15px] sm:text-xl font-bold text-[#223531]">Social</div>
            <div className="flex justify-center gap-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-2xl"
                />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-2xl"
                />
              </a>
              <a
                href="https://www.threads.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faThreads}
                  className="text-2xl"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="sm:text-sm text-[10px] text-[#223531]  text-center pt-4 pb-5 font-bold">
            @ 2025 All Rights Reserved. Designed by DKLakshman
        </div>
      </div>
    </div>
  );
};

export default Footer;
