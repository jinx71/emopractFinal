// eslint-disable-next-line no-unused-vars
import React from 'react';
import AboutHero from './AboutHero/AboutHero';
import AboutUs from './AboutUs/AboutUs';
import AboutOurStory from './AboutOurStory/AboutOurStory';
import AboutOurTeam from './AboutOurTeam/AboutOurTeam';
import Footer from '../Shared/Footer/Footer';
import AboutOurMission from './AboutOurMission/AboutOurMission';


const About = () => {
    return (
        <div>
            <AboutHero></AboutHero>
            <AboutUs></AboutUs>
            <AboutOurStory></AboutOurStory>
            <AboutOurMission></AboutOurMission>
            <AboutOurTeam></AboutOurTeam>
            <Footer></Footer>
        </div>
    );
};

export default About;