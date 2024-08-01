// eslint-disable-next-line no-unused-vars
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#D1D1D1] mt-[187px] 2xl:mt-[280px]  relative">
      <div className="absolute  top-[-127px]  lg:top-[-80px] xl:top-[-110px] 2xl:top-[-150px] grid justify-center w-full ">
        <div className=" bg-[#EDEDED] mx-[30px] md:mx-[50px] lg:mx-[100px] rounded-[10px] shadow-xl lg:grid lg:grid-cols-2 justify-center items-center">
          <div className="footerTopSubParent">
            <div className="footerTopImg">
              <img
                className="h-full w-full object-cover rounded-full"
                src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719344043/Emopract/footerTopImg_ldqzbq.jpg"
                alt=""
              />
            </div>
            <div>
              <h3 className="footerTopTitle">happy to connect</h3>
            </div>
            <div>
              <BsWhatsapp className="text-[30px] lg:text-[40px] 2xl:text-[70px] text-[#7EA254]" />
            </div>
            <div className=""></div>
          </div>

          <div className="flex justify-center items-center text-center border-t-[1px] border-[#7EA254] lg:border-none px-[32px]">
            <div className="text-center pt-[20px] md:pt-[40px]">
              <button className="footerTopBtn">Request a call back</button>
              <h4 className="footerTopnumber">+91 9230977337</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute  top-[127px]  lg:top-[200px] xl:top-[210px] 2xl:top-[250px] grid justify-center w-full ">
        <div className=" bg-[#EDEDED] mx-[30px] md:mx-[50px] lg:mx-[100px] rounded-[10px] shadow-xl grid grid-cols-1 justify-center items-center">
          <div className="footerTopSubParent">
            
            <div>
              <h3 className="footerTopTitle">24/7 IVR  Support <br></br>
9230977338 <br></br>
*only for members</h3>
            </div>
           
          </div>

          
        </div>
      </div>

      {/* foooter content */}
      <div className="pt-[374px] md:pt-[500px] lg:pt-[400px] xl:pt-[600px] 2xl:pt-[700px]">
        <div className="px-[30px] md:px-[50px]  lg:px-[60px] xl:px-[100px] pb-[25px] grid grid-cols-2 lg:grid-cols-5 justify-between gap-x-[35px] gap-y-[35px]">
          <div>
            <div className="footerLogoparent">
              <img
                className="h-full w-full object-cover "
                src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719302631/Emopract/mHeroLogo_techun.png"
                alt=""
              />
            </div>

            <div className=" ">
              <div className="flex  pt-[20px] pb-[15px] gap-x-[10px]">
                <FaFacebook size={28} className="footerSocailIcon" />
                <FaInstagram size={28} className="footerSocailIcon" />
                <FaPinterest size={28} className="footerSocailIcon" />
              </div>
              <div className="flex  pb-[15px] gap-x-[10px]">
                <FaXTwitter size={28} className="footerSocailIcon" />
                <FaLinkedinIn size={28} className="footerSocailIcon" />
                <FaYoutube size={28} className="footerSocailIcon" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="footerMenuTextTitle">link</h2>
            <Link to="/About">
              <p className="footerMenuText">About Us</p>
            </Link>
            <Link to="/service">
              <p className="footerMenuText">Services</p>
            </Link>
            <Link to="/membership">
              {" "}
              <p className="footerMenuText">Membership</p>
            </Link>
            {/* <Link to="/blogs">
              {" "}
              <p className="footerMenuText">Blog</p>
            </Link> */}
            <Link to="/event">
              {" "}
              <p className="footerMenuText">Event</p>
            </Link>
            <Link to="/contact">
              <p className="footerMenuText">Contact Us</p>
            </Link>
            <Link to="/career">
              <p className="footerMenuText">Career</p>
            </Link>
          </div>

          <div>
            <h2 className="footerMenuTextTitle">emopract pvt ltd</h2>
            <p className="footerMenuText">Bhakta Tower</p>
            <p className="footerMenuText">KB-22, KB Block</p>
            <p className="footerMenuText">Sector- 3, Salt Lake</p>
            <p className="footerMenuText">WB, Kolkata- 700106</p>
            <p className="footerMenuText">info@emopract.com</p>
          </div>

          <div>
            <h2 className="footerMenuTextTitle">newsletter</h2>
            {/* <p className="footerMenuText">
              Nunc tincidunt mollis dui in tempor. Duis ultricies libero sit
              amet.{" "}
            </p> */}
            <div className="relative inline-block">
              <input
                type="text"
                placeholder="enter your mail here"
                className="text-[8px] md:text-[10px] font-Varela p-[10px] pr-[40px] font-normal w-full rounded-full outline-none mt-[15px]"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/4 h-[25px] w-[25px] rounded-full bg-black flex justify-center items-center outline-none">
                <IoSend className="text-[#7EA254] text-[12px]" />
              </div>
            </div>
          </div>

          <div
            className="py-[35px]  2xl:py-[35px]   
           "
          >
            <Link to="/terms-of-use">
              <p className="footerMenuText">Terms & Conditions </p>
            </Link>
            {/* <p className="footerMenuText">News & Letters </p> */}
            <Link to="/privacy-policy">
              <p className="footerMenuText">Privacy Policy</p>
            </Link>
          </div>
        </div>

        <hr />

        <div className="py-[25px] px-[30px] 2xl:py-[30px]  md:px-[50px]  lg:px-[60px] xl:px-[100px] text-center">
          <div
            className="flex justify-center items-center space-x-[40px]
          "
          >
            <p className="footerMenuText ">
              Copyright © Emopract 2024. Designed and Developed Ethically By{" "}
              <span>
                <Link
                  to="https://www.ethicalden.com/"
                  target="_blank"
                  className="underline"
                >
                  Ethical Den
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
