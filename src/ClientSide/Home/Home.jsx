// eslint-disable-next-line no-unused-vars
import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import ChooseUs from "./ChooseUs/ChooseUs";
import PopularService from "./PopularService/PopularService";
import MembershipHome from "./MembershipHome/MembershipHome";
import DiscoverMoment from "../Event/DiscoverMoment/DiscoverMoment";
import Reels from "./Reels/Reels";
import Testimonial from "./Testimonial/Testimonial";
import Footer from "./../Shared/Footer/Footer";
import AboutOurTeam from "../About/AboutOurTeam/AboutOurTeam";
import Events from "./Events/Events";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <ChooseUs></ChooseUs>
      <PopularService></PopularService>
      <Events></Events>
      <MembershipHome></MembershipHome>
      <Reels></Reels>
      {/* <AboutOurTeam /> */}
      <DiscoverMoment></DiscoverMoment>
      {/* <Testimonial></Testimonial> */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
