/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css";

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleMenu = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const menuClose = () => {
    setOpen(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Fixed Navbar */}
      <nav className={`lg:hidden fixed-navbar ${scrolled ? "hidden" : ""}`}>
        <div className="navbarLeftRightSpace flex justify-between items-center ">
          <div className="headerLogo">
            <Link to="/">
              <img
                className="h-full w-full object-cover"
                src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719302631/Emopract/mHeroLogo_techun.png"
                alt="brand logo"
              />
            </Link>
          </div>
          <div>
            <IoMenu
              className="text-[35px] md:text-[38px] text-white"
              onClick={handleMenu}
            ></IoMenu>
          </div>
          {open && (
            <ul className="p-[32px] absolute top-0 right-0 bg-white w-[100%] z-50 transition-transform duration-1000 ease-in-out">
              <div className="pb-[30px] flex justify-between items-center border-b-2 border-gray-200">
                <div className="headerLogo">
                  <Link to="/">
                    <img
                      className="h-full w-full object-cover"
                      src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719302631/Emopract/mHeroLogo_techun.png"
                      alt="brand logo"
                    />
                  </Link>
                </div>
                <div
                  className="md:text-[38px] text-[35px] font-title"
                  onClick={handleClose}
                >
                  <MdClose />
                </div>
              </div>
              <div className="mobileMenuParent">
                <Link to="/" onClick={menuClose}>
                  <li>Home</li>
                </Link>
                <Link to="/About" onClick={menuClose}>
                  <li>About Us</li>
                </Link>
                <Link to="/service" onClick={menuClose}>
                  <li>Our Service</li>
                </Link>
                <Link to="/membership" onClick={menuClose}>
                  <li>Membership</li>
                </Link>
                <Link to="/event" onClick={menuClose}>
                  <li>Events</li>
                </Link>

                <Link to="/blogs" onClick={menuClose}>
                  <li>Blogs</li>
                </Link>
                <Link to="/contact" onClick={menuClose}>
                  <li>Contact us</li>
                </Link>
              </div>
            </ul>
          )}
        </div>
      </nav>
      {/* large screen nav */}
      <div>
        <div className="hidden lg:block absolute z-50 w-full">
          <div className="largeScreenMenu ">
            <div className="headerLogo">
              <Link to="/">
                <img
                  className="h-full w-full object-cover"
                  src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719302631/Emopract/mHeroLogo_techun.png"
                  alt="brand logo"
                />
              </Link>
            </div>

            <div>
              <div className="mobileMenuParent">
                <Link to="/" onClick={menuClose}>
                  <li>Home</li>
                </Link>
                <Link to="/About" onClick={menuClose}>
                  <li>About Us</li>
                </Link>
                <Link to="/service" onClick={menuClose}>
                  <li>Our Service</li>
                </Link>
                <Link to="/membership" onClick={menuClose}>
                  <li>Membership</li>
                </Link>
                <Link to="/event" onClick={menuClose}>
                  <li>Events</li>
                </Link>

                <Link to="/blogs" onClick={menuClose}>
                  <li>Blogs</li>
                </Link>
                <Link to="/contact" onClick={menuClose}>
                  <li>Contact us</li>
                </Link>
              </div>
            </div>
            <div>
              <button className="homeLargeAppoinMent">Appointment</button>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Container */}
      <div className="slider-container ">
        <Slider {...settings}>
          <div className="relative ">
            <div
              className='bg-[url("https://i.ibb.co/K00S7wX/Asset-2-4x.webp")] 
            bg-no-repeat bg-center bg-cover w-[100%] h-[400px]  '
            >
              {/* Hero Image Content */}
              <div className="heroImgParent">
                <div>
                  <h2 className="commonTitle pb-[10px] md:pb-[15px] lg:pb-[15px]xl:pb-[25px] 2xl:pb-[25px]">
                    embrace empathize empower
                  </h2>
                  <p
                    className="commonParagraph 
                                    pb-[25px] px-[10%] 
                                    md:pb-[30px] md:px-[15%] lg:hidden block
                                    lg:pb-[30px] lg:px-[15%]
                                    xl:pb-[35px] xl:px-[15%]
                                    "
                  >
                    Elders are our roots. They envelop us in affection, and
                    motivate us to fly high.
                  </p>

                  <p
                    className="commonParagraph 
                                    lg:pb-[30px] lg:block hidden
                                    xl:pb-[35px] 
                                    
                                    "
                  >
                    Elders are our roots. They envelop us in affection, and
                    motivate us to fly high. In turn, we need to be their shade
                    and support, ensuring "Wellness" in their advanced years,
                    and providing "Joys of Living" when they need them the most.
                    They heralded the dawn of our days; let us assist them to
                    enjoy their golden years in tranquility.
                  </p>

                  <button className="heroHomeBtn">Request a Call back</button>
                </div>
              </div>
            </div>
          </div>
          {/* slider two */}
          <div className="relative">
            <div className='bg-[url("https://i.ibb.co/p41vrrw/A7405738.jpg")] bg-no-repeat bg-top bg-cover w-[100%] h-[400px] '>
              {/* Hero Image Content */}
              <div className="heroImgParent">
                <div>
                  <h2 className="commonTitle pb-[10px] md:pb-[15px] lg:pb-[15px]xl:pb-[25px] 2xl:pb-[25px]">
                    embrace empathize empower
                  </h2>
                  <p
                    className="commonParagraph 
                                    pb-[25px] px-[10%] 
                                    md:pb-[30px] md:px-[15%] lg:hidden block
                                    lg:pb-[30px] lg:px-[15%]
                                    xl:pb-[35px] xl:px-[15%]
                                    "
                  >
                    In turn, we need to be their shade and support, ensuring
                    "Wellness" in their advanced years.
                  </p>

                  <p
                    className="commonParagraph 
                                    lg:pb-[30px] lg:block hidden
                                    xl:pb-[35px] 
                                    
                                    "
                  >
                    Elders are our roots. They envelop us in affection, and
                    motivate us to fly high. In turn, we need to be their shade
                    and support, ensuring "Wellness" in their advanced years,
                    and providing "Joys of Living" when they need them the most.
                    They heralded the dawn of our days; let us assist them to
                    enjoy their golden years in tranquility.
                  </p>

                  <button className="heroHomeBtn">Request a Call back</button>
                </div>
              </div>
            </div>
          </div>

          {/* slider three */}
          <div className="relative">
            <div className='bg-[url("https://i.ibb.co/DV54rfd/WDW-0963.jpg")] bg-no-repeat bg-center bg-cover w-[100%] h-[400px] '>
              {/* Hero Image Content */}
              <div className="heroImgParent">
                <div>
                  <h2 className="commonTitle pb-[10px] md:pb-[15px] lg:pb-[15px]xl:pb-[25px] 2xl:pb-[25px]">
                    embrace empathize empower
                  </h2>
                  <p
                    className="commonParagraph 
                                    pb-[25px] px-[10%] 
                                    md:pb-[30px] md:px-[15%] lg:hidden block
                                    lg:pb-[30px] lg:px-[15%]
                                    xl:pb-[35px] xl:px-[15%]
                                    "
                  >
                    By having them experience "Joys of Living" when they need
                    them the most.
                  </p>

                  <p
                    className="commonParagraph 
                                    lg:pb-[30px] lg:block hidden
                                    xl:pb-[35px] 
                                    2xl:pb-[50px]
                                    
                                    "
                  >
                    Elders are our roots. They envelop us in affection, and
                    motivate us to fly high. In turn, we need to be their shade
                    and support, ensuring "Wellness" in their advanced years,
                    and providing "Joys of Living" when they need them the most.
                    They heralded the dawn of our days; let us assist them to
                    enjoy their golden years in tranquility.
                  </p>

                  <button className="heroHomeBtn">Request a Call back</button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
