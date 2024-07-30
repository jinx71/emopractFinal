// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const ChooseUs = () => {
  return (
    <div className="sectionGap">
      <div className="chooseUsParent">
        <div className="chooseUsImgParent">
          <img
            className="h-full w-full object-cover  rounded-[10px]"
            src="https://i.ibb.co/gRLF35Z/WDW-0772-3.jpg"
            alt=""
          />
        </div>
        <div>
          <p className="chooseUsSamll">Why Choose Us</p>
          <h3 className="chooseUsTitle">most joyful service for elders</h3>
          <p className="chooseUsParaText">
            We are a group of enthusiastic, affectionate and trained personnel
            to accompany you in your journey of life. Our team looks forward to
            being with you, by you, like a family member. The greatest happiness
            comes from knowing that there is someone to rely on
          </p>

          <Link to="/about">
            <button className="chooseusKnowbtn">Know More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
