/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaCircleCheck } from 'react-icons/fa6';

const MembershipCard = () => {
    return (
        <div className='sectionGap'>
            <div className='lg:text-center'>
                <p className='memberSmall'>our membership</p>
                <h2 className='memberTitle lg:pb-[50px]'>our membership package</h2>
                <p className='memberParaText lg:hidden'>Do you want to live in a place full of comfort and convenience, where electricity is produced by itself and you also save on it? With us it can come true faster than you.</p>
            </div>
            {/*======== membership cards ========= */}

            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[25px] xl:grid-cols-3 gap-y-[25px]'>
                <div className='rounded-[20px] p-[30px] bg-[#7EA254] lg:bg-transparent memberSubparentCard group '>
                    <p className='memberCardExpert'>Expert</p>
                    <div className='memberPriceParent'>
                        <h2 className='memberCardPriceTtile'>Rs.30,000</h2>
                        <p className='memberCardPriceSubTtile'>for 12 months/ Per Person</p>
                    </div>
                    <p className='membermiddlePara'>"Joys of Living Star" visit - 12 ( 180 minutes per visit )</p>
                    <button className='memberApplyBtn'>Apply Now</button>
                    <hr />
                    <h3 className='memberCardOfferService'>Offer Services :</h3>
                    <div>
                        <div className='memberCardItmesParent'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>Health Record Maintenance </p>
                        </div>
                        <div className='memberCardItmesParent'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>24/7 Emergency Coordination - For 12 months </p>
                        </div>
                        <div className='memberCardItmesParent'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>Hospital Assist (Preferred Patient Collaboration)</p>
                        </div>
                        <div className='memberCardItmesParent'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>Nutritionist Visit - Eat Healthy</p>
                        </div >
                        <div className='memberCardItmesParent'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>Hello ep !! Calls (Customised as per Member)</p>
                        </div>
                    </div>
                </div>

                {/* ============ card two========== */}
                <div className='rounded-[20px] p-[30px] lg:bg-[#7EA254] bg-transparent memberSubparentCard group '>
                    <p className='memberCardExpert2'>Expert</p>
                    <div className='memberPriceParent2'>
                        <h2 className='memberCardPriceTtile2'>Rs.30,000</h2>
                        <p className='memberCardPriceSubTtile2'>for 12 months/ Per Person</p>
                    </div>
                    <p className='membermiddlePara2'>"Joys of Living Star" visit - 12 ( 180 minutes per visit )</p>
                    <button className='memberApplyBtn2'>Apply Now</button>
                    <hr />
                    <h3 className='memberCardOfferService2'>Offer Services :</h3>
                    <div>
                        <div className='memberCardItmesParent2'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>Health Record Maintenance </p>
                        </div>
                        <div className='memberCardItmesParent2'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>24/7 Emergency Coordination - For 12 months </p>
                        </div>
                        <div className='memberCardItmesParent2'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>Hospital Assist (Preferred Patient Collaboration)</p>
                        </div>
                        <div className='memberCardItmesParent2'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>Nutritionist Visit - Eat Healthy</p>
                        </div >
                        <div className='memberCardItmesParent2'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>Hello ep !! Calls (Customised as per Member)</p>
                        </div>
                    </div>
                </div>
                {/* =================== card theree============== */}
                <div className='rounded-[20px] p-[30px]  memberSubparentCard group '>
                    <p className='memberCardExpert3'>Expert</p>
                    <div className='memberPriceParent'>
                        <h2 className='memberCardPriceTtile3'>Rs.30,000</h2>
                        <p className='memberCardPriceSubTtile3'>for 12 months/ Per Person</p>
                    </div>
                    <p className='membermiddlePara3'>"Joys of Living Star" visit - 12 ( 180 minutes per visit )</p>
                    <button className='memberApplyBtn3'>Apply Now</button>
                    <hr />
                    <h3 className='memberCardOfferService3'>Offer Services :</h3>
                    <div>
                        <div className='memberCardItmesParent3'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>Health Record Maintenance </p>
                        </div>
                        <div className='memberCardItmesParent3'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>24/7 Emergency Coordination - For 12 months </p>
                        </div>
                        <div className='memberCardItmesParent3'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>Hospital Assist (Preferred Patient Collaboration)</p>
                        </div>
                        <div className='memberCardItmesParent3'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>Nutritionist Visit - Eat Healthy</p>
                        </div >
                        <div className='memberCardItmesParent3'>
                            <div>
                                <FaCircleCheck />

                            </div>
                            <p>Hello ep !! Calls (Customised as per Member)</p>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default MembershipCard;