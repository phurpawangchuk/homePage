import React from "react";

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Phurpa's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p dangerouslySetInnerHTML={{ __html: bio }}></p>
        </div>

        <div id="contactme" className="nine columns">
          <div className="row"><br></br><br></br></div>
          <h2>Contact Details</h2>
          <p className="">
            <span>{name}</span>
            <br />
            <span>
              {street}
              <br />
              {city} {state}, {zip}
            </span>
            <br />
            <span>{phone}</span>
            <br />
            <span>{email}</span>
          </p>
        </div>
      </div>
    </section >
  );
};

export default About;
