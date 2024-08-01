// eslint-disable-next-line no-unused-vars
import React from 'react';
import MembershipHero from './MembershipHero/MembershipHero';
import MembershipCard from './MembershipCard/MembershipCard';
import MemberTrending from './MemberTrending/MemberTrending';
import MembershipFaq from './MembershipFaq/MembershipFaq';
import Footer from './../Shared/Footer/Footer';
import Events from '../Home/Events/Events';
import Chatbot from '../Shared/Chatbot/Chatbot';

const Membership = () => {
    return (
        <div>
            <MembershipHero></MembershipHero>
            <MembershipCard></MembershipCard>
            {/* <MemberTrending></MemberTrending> */}
            <Events></Events>
            <MembershipFaq></MembershipFaq>
            <Chatbot></Chatbot>
            <Footer></Footer>
        </div>
    );
};

export default Membership;