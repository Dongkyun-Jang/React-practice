import React from "react";
import Location from "./Location";
import "./SocialCard.css";
import PhoneNumber from "./PhoneNumber";

export default function SocialCard({ userData }) {
  return (
    <div className="card">
      <div className="card_title">
        {userData.name.first} {userData.name.last}
      </div>
      <div className="card_body">
        <Location location={userData.location} />
        <PhoneNumber type="Home" number={userData.phone} />
        <PhoneNumber type="Mobile" number={userData.cell} />
        <div className="card_image">
          <img src={userData.picture.medium} alt="" />
        </div>
      </div>
    </div>
  );
}
