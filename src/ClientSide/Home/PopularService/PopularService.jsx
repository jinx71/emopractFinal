// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const PopularService = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
  };

  var settingsLarge = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
  };

  return (
    <div>
      <div className="">
        <div className="sectionGap md:mb-[100px] xs:mb-[0px]">
          <div className="md:text-center md:w-full">
            <p className="popularSmallText">Our Services</p>
            <h2 className="popularSmallTitle">our most popular services</h2>
            <p className="popularDes md:hidden">
              Joys of Life – the so-called trivialities and intangibles that add
              up to constitute a rich and full life, is our unique offering to
              our esteemed members. Our wellness buddies bring comfort and peace
              of mind with proactive care for health-related ailments.
            </p>
            <p className="popularDesLarge hidden md:block">
              Joys of Life – the so-called trivialities and intangibles that add
              up to constitute a rich and full life, is our unique offering to
              our esteemed members. Our wellness buddies bring comfort and peace
              of mind with proactive care for health-related ailments.
            </p>
          </div>
        </div>

        {/* mobile slider  */}
        <div className='md:hidden block bg-[url("https://res.cloudinary.com/dshn2s0tc/image/upload/v1719506684/Emopract/cardBg_g8b4cu.png")] bg-no-repeat bg-cover bg-center h-[1200px] '>
          <div className="w-[366px]  mx-auto">
            <div className="slider-container ">
              <Slider {...settings}>
                <div className="">
                  <div className="h-[350px] md:h-full">
                    <img
                      className="h-full w-full object-cover rounded-[10px]"
                      src="./Images/homeOurServicesRegularWork.png"
                      alt=""
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="popularSlidertitle">Regular Work</h2>
                    <p className="popularSlidertext">
                      The mundane matters of everyday life take up a lot of time
                      and energy, leaving us utterly drained.
                    </p>
                    <Link to="/service">
                      <button className="popularReadMoreBtn underline-offset-8">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="">
                  <div className="h-[350px] md:h-full">
                    <img
                      className="h-full w-full object-cover rounded-[10px]"
                      src="./Images/homeOurServicesOuting.png"
                      alt=""
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="popularSlidertitle">Outing</h2>
                    <p className="popularSlidertext">
                      Every senior citizen you talk to will have a common
                      grouse.
                    </p>
                    <Link to="/service">
                      <button className="popularReadMoreBtn underline-offset-8">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>

                <div>
                  <div className="h-[350px] md:h-full">
                    <img
                      className="h-full w-full object-cover rounded-[10px]"
                      src="./Images/homeOurServicesCompanion.png"
                      alt=""
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="popularSlidertitle">Companion</h2>
                    <p className="popularSlidertext">
                      Sometimes we just want someone to sit with us and make us
                      feel cocooned in companionship.
                    </p>
                    <Link to="/service">
                      <button className="popularReadMoreBtn underline-offset-8">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>

                <div>
                  <div className="h-[350px] md:h-full">
                    <img
                      className="h-full w-full object-cover rounded-[10px]"
                      src="./Images/homeOurServicesEntertainment.png"
                      alt=""
                    />
                  </div>

                  <div className="text-center">
                    <h2 className="popularSlidertitle">Entertainment</h2>
                    <p className="popularSlidertext">
                      People forego so many temptations because they have work,
                      obligations, responsibilities, duties.
                    </p>

                    <Link to="/service">
                      <button className="popularReadMoreBtn underline-offset-8">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>

                <div>
                  <div className="h-[350px] md:h-full">
                    <img
                      className="h-full w-full object-cover rounded-[10px]"
                      src="./Images/homeOurServicesEntert.png"
                      alt=""
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="popularSlidertitle">
                      Entertainment at Home
                    </h2>
                    <p className="popularSlidertext">
                      Even within their home, challenges often flummox the
                      elderly.
                    </p>
                    <Link to="/service">
                      <button className="popularReadMoreBtn underline-offset-8">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>

                <div>
                  <div className="h-[350px] md:h-full">
                    <img
                      className="h-full w-full object-cover rounded-[10px]"
                      src="./Images/homeOurServicesTechHelp.png"
                      alt=""
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="popularSlidertitle">Tech Help</h2>
                    <p className="popularSlidertext">
                      Today’s world runs on Wi-Fi, and apps rule our world.
                    </p>
                    <Link to="/service">
                      <button className="popularReadMoreBtn underline-offset-8">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </Slider>
            </div>
          </div>

          <div>
            <div className="px-[36px] pt-[40px]">
              <p className="getIntouchSmall">Get In Touch</p>
              <h3 className="getTitle">free consultation</h3>
              <p className="getParaText">
                We understand that you may need more details on our services and
                we care to clarify all of your doubts. Please reach out and help
                us to schedule a call with you.
              </p>
            </div>
            <div className="relative">
              <div className="getinTmgParent">
                <img
                  className="w-full h-full object-cover rounded-[10px]"
                  src="./Images/homeOurServicesFreeCon.png"
                  alt=""
                />
              </div>
              <div className="absolute top-[165px] w-full ">
                <div className="bg-[#F2F2F2] mx-[36px]  rounded-[10px]">
                  <h3 className="eventCardTitle text-[#7EA254]">
                    request for a session!
                  </h3>
                  <form className="space-y-[20px] mt-[15px]">
                    <div className="inputParent">
                      <label className="formTitle text-black" htmlFor="">
                        Full Name
                      </label>
                      <input className="contactInpufeild" type="text" />
                    </div>
                    <div className="inputParent">
                      <label className="formTitle text-black" htmlFor="">
                        Phone Number
                      </label>
                      <input className="contactInpufeild" type="text" />
                    </div>
                    <div className="inputParent">
                      <label className="formTitle text-black" htmlFor="">
                        Email Address
                      </label>
                      <input className="contactInpufeild" type="text" />
                    </div>
                    <div className="inputParent">
                      <label className="formTitle text-black" htmlFor="">
                        {" "}
                        Message
                      </label>
                      <input className="contactInpufeild" type="text" />
                    </div>

                    <div className="inputParent pt-[30px] pb-[25px]">
                      <button className="contactSendBtn bg-[#7EA254] text-white">
                        Send Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* large slider  */}
        <div className="  hidden md:block relative">
          <div className="w-full mx-auto absolute top-[-100px]">
            <div className="slider-container ">
              <Slider {...settingsLarge}>
                <div className="relative me-6">
                  <div className="2xl:h-[352px] 2xl:px-[10px] xl:h-[352px]  xl:px-[15px] md:h-[352px] md:px-[10px] ">
                    <img
                      className="h-full w-full object-cover rounded-[10px]"
                      src="./Images/homeOurServicesRegularWork.png"
                      alt=""
                    />
                  </div>
                  <div className="text-center ">
                    <h2 className="largeCardTitle">Regular Work</h2>
                    <p className="largeCardPara">
                      The mundane matters of everyday life take up a lot of time
                      and energy, leaving us utterly drained.
                    </p>
                    <button className="largeCardBtn underline">
                      Read More
                    </button>
                  </div>
                </div>

                <div className=" ">
                  <div className="2xl:h-[352px] xl:h-[352px] 2xl:px-[10px] xl:px-[15px] md:h-[352px] md:px-[10px]">
                    <img
                      className="h-full w-full object-cover rounded-[10px]"
                      src="./Images/homeOurServicesOuting.png"
                      alt=""
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="largeCardTitle">Outing</h2>
                    <p className="largeCardPara">
                      Every senior citizen you talk to will have a common
                      grouse.
                    </p>
                    <button className="largeCardBtn underline">
                      Read More
                    </button>
                  </div>
                </div>

                <div className=" ">
                  <div className="2xl:h-[352px] xl:h-[352px] 2xl:px-[10px] xl:px-[15px] md:h-[352px] md:px-[10px]">
                    <img
                      className="h-full w-full object-cover rounded-[10px]"
                      src="./Images/homeOurServicesCompanion.png"
                      alt=""
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="largeCardTitle">Companion</h2>
                    <p className="largeCardPara">
                      Sometimes we just want someone to sit with us and make us
                      feel cocooned in companionship.
                    </p>
                    <button className="largeCardBtn underline">
                      Read More
                    </button>
                  </div>
                </div>

                <div className=" ">
                  <div className="2xl:h-[352px] xl:h-[352px] 2xl:px-[10px] xl:px-[15px] md:h-[352px] md:px-[10px]">
                    <img
                      className="h-full w-full object-cover rounded-[10px]"
                      src="./Images/homeOurServicesEntert.png"
                      alt=""
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="largeCardTitle">Entertainment</h2>
                    <p className="largeCardPara">
                      People forego so many temptations because they have work,
                      obligations, responsibilities, duties.
                    </p>
                    <button className="largeCardBtn underline">
                      Read More
                    </button>
                  </div>
                </div>

                <div className=" ">
                  <div className="2xl:h-[352px] xl:h-[352px] 2xl:px-[10px] xl:px-[15px] md:h-[352px] md:px-[10px]">
                    <img
                      className="h-full w-full object-cover rounded-[10px]"
                      src="./Images/homeOurServicesEntertainment.png"
                      alt=""
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="largeCardTitle">Entertainment at Home</h2>
                    <p className="largeCardPara">
                      Even within their home, challenges often flummox the
                      elderly.
                    </p>
                    <button className="largeCardBtn underline">
                      Read More
                    </button>
                  </div>
                </div>

                <div className=" ">
                  <div className="2xl:h-[352px] xl:h-[352px] 2xl:px-[10px] xl:px-[15px] md:h-[352px] md:px-[10px]">
                    <img
                      className="h-full w-full object-cover rounded-[10px]"
                      src="./Images/homeOurServicesTechHelp.png"
                      alt=""
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="largeCardTitle">Tech Help</h2>
                    <p className="largeCardPara">
                      Today’s world runs on Wi-Fi, and apps rule our world.
                    </p>
                    <button className="largeCardBtn underline">
                      Read More
                    </button>
                  </div>
                </div>
              </Slider>
            </div>
          </div>

          <div className="bg-[#7EA254]">
            <div
              className="grid 2xl:grid-cols-2 2xl:pt-[530px] 2xl:mx-[240px] 2xl:gap-x-[100px]
            xl:grid-cols-2 xl:pt-[530px] xl:mx-[200px] xl:gap-x-[80px]
             lg:grid-cols-2 lg:pt-[530px] lg:mx-[100px] lg:gap-x-[50px]
            md:grid-cols-2 md:pt-[530px] md:mx-[50px] md:gap-x-[30px]"
            >
              <div className="  ">
                <div className="w-full h-full   bg-[#F2F2F2]   rounded-[10px]">
                  <h3 className="eventCardTitle text-[#7EA254]">
                    request for a session!
                  </h3>
                  <form className="space-y-[20px] mt-[15px]">
                    <div className="inputParent">
                      <label className="formTitle text-black" htmlFor="">
                        Full Name
                      </label>
                      <input className="contactInpufeild" type="text" />
                    </div>
                    <div className="inputParent">
                      <label className="formTitle text-black" htmlFor="">
                        Phone Number
                      </label>
                      <input className="contactInpufeild" type="text" />
                    </div>
                    <div className="inputParent">
                      <label className="formTitle text-black" htmlFor="">
                        Email Address
                      </label>
                      <input className="contactInpufeild" type="text" />
                    </div>
                    <div className="inputParent">
                      <label className="formTitle text-black" htmlFor="">
                        {" "}
                        Message
                      </label>
                      <input className="contactInpufeild" type="text" />
                    </div>

                    <div className="inputParent pt-[30px] pb-[15px] 2xl:pb-[100px]">
                      <button className="contactSendBtn bg-[#7EA254] text-white">
                        Send Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className=" w-full">
                <div className="w-full">
                  <p className="getIntouchSmall 2xl:pt-0 xl:pt-0 md:pt-0">
                    Get In Touch
                  </p>
                  <h3 className="getTitle">free consultation</h3>
                  <p className="getParaText">
                    We understand that you may need more details on our services
                    and we care to clarify all of your doubts. Please reach out
                    and help us to schedule a call with you.
                  </p>
                </div>

                <div
                  className="getinTmgParent w-full xl:mb-[41px] 2xl:mb-[41px] lg:mb-[30px]
                md:mb-[20px]"
                >
                  <img
                    className="w-full h-full object-cover rounded-[10px]"
                    src="./Images/homeOurServicesFreeCon.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularService;
