// eslint-disable-next-line no-unused-vars
import React from 'react';
import MembershipHero from './MembershipHero/MembershipHero';
import MembershipCard from './MembershipCard/MembershipCard';
import MemberTrending from './MemberTrending/MemberTrending';
import MembershipFaq from './MembershipFaq/MembershipFaq';
import Footer from './../Shared/Footer/Footer';

const Membership = () => {
    return (
        <div>
            <MembershipHero></MembershipHero>
            <MembershipCard></MembershipCard>
            <MemberTrending></MemberTrending>
            <MembershipFaq></MembershipFaq>
            <Footer></Footer>
        </div>
    );
};

export default Membership;