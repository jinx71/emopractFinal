// eslint-disable-next-line no-unused-vars
import React from 'react';

const OurService = () => {
    return (
        <div className='sectionGap'>
            <div className='lg:grid lg:grid-cols-2 lg:gap-x-[5%] items-center'>
                <div className='ourServiceImgParent'>
                    <img className='h-full w-full object-cover rounded-[10px]' src="./Images/servicesCover.png" alt="" />
                </div>
                <div>
                    <p className='ourServiceSmall'>Our Services</p>
                    <h3 className='ourServiceTitle' >our most popular services</h3>
                    <p className='ourServicePara'>Joys of Life – the so-called trivialities and intangibles that add up to constitute a rich and full life, is our unique offering to our esteemed members. Our wellness buddies bring comfort and peace of mind with proactive care for health-related ailments.</p>
                </div>
            </div>
        </div>
    );
};

export default OurService;