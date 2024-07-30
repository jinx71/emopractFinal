// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const MembershipHome = () => {
  const joyItems = [
    {
      imgSrc:
        "https://i.ibb.co/fSs0N5s/Whats-App-Image-2024-07-24-at-10-22-36-AM-4.jpg",
    },
    {
      imgSrc:
        "/public/Images/membership/WhatsApp Image 2024-07-24 at 10.22.36 AM (3).jpeg",
    },
    {
      imgSrc:
        "https://i.ibb.co/zrHWpYx/Whats-App-Image-2024-07-24-at-10-22-35-AM.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-[#EDEDED] sectionGap">
      <div className="py-[51px] px-[30px] 2xl-[100px] xl-[100px] md-[100px] ">
        <div>
          <p className="homeMemberShipSamll 2xl:text-center xl:text-center lg:text-center md:text-center">
            Our Membership
          </p>
          <h3 className="homeMemberShipTitle ">membership package</h3>
        </div>
        {/* <div
          className="grid grid-cols-1 gap-y-[15px] cursor-pointer
        2xl:grid-cols-3 2xl:gap-x-[60px] 2xl:pt-[50px]  xl:pt-[40px] lg:pt-[40px]  md:pt-[40px] xl:grid-cols-3 xl:gap-x-[50px]
        lg:grid-cols-3 lg:gap-x-[50px] md:grid-cols-3 md:gap-x-[30px] "
        >
          <Link to="/membership">
            <div
              className="h-[450px] 
    2xl:h-[478px]
    xl:h-[478px]
    md:h-[200px]
    lg:h-[300px] w-full"
            >
              <img
                className="h-full w-full object-fill  rounded-[10px]"
                src="
                https://i.ibb.co/fSs0N5s/Whats-App-Image-2024-07-24-at-10-22-36-AM-4.jpg"
                alt=""
              />
            </div>
          </Link>

          <Link to="/membership">
            <div
              className="h-[450px] 
    2xl:h-[478px]
    xl:h-[478px]
    md:h-[200px]
    lg:h-[300px] w-full"
            >
              <img
                className="h-full w-full object-fill  rounded-[10px]"
                src="/public/Images/membership/WhatsApp Image 2024-07-24 at 10.22.36 AM (3).jpeg"
                alt=""
              />
            </div>
          </Link>

          <Link to="/membership">
            <div
              className="h-[450px] 
    2xl:h-[478px]
    xl:h-[478px]
    md:h-[200px]
    lg:h-[300px] w-full"
            >
              <img
                className="h-full w-full object-fill  rounded-[10px]"
                src="https://i.ibb.co/zrHWpYx/Whats-App-Image-2024-07-24-at-10-22-35-AM.jpg"
                alt=""
              />
            </div>
          </Link>
        </div> */}
        <div className="slider-container">
          <Slider {...settings}>
            {joyItems.map((item, index) => (
              <Link to={item.link} key={index} className="px-2">
                <div>
                  <Link to="/membership">
                    <div className="h-[404]">
                      <img
                        className="h-full w-full object-cover rounded-[10px]"
                        src={item.imgSrc}
                        alt=""
                      />
                    </div>
                  </Link>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MembershipHome;
