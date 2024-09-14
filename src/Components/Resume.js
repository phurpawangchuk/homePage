import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var dbskillmessage = data.dbskillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });
    var skills = data.skills.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
    var dbskills = data.databases.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
  }

  return (
    <div>
      <section id="education">
        <div className="row"><br></br><br></br></div>
        <div className="row">
          <div className="three columns">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>


        <div className="row" id="experiences">
          <div className="row"><br></br><br></br></div>
          <div className="three columns">
            <h1>
              <span>Experiences</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{work}</div>
            </div>
          </div>
        </div>

        <div id="skill">
          <div className="row"><br></br><br></br></div>

          <div className="row">
            <div className="three columns">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="three columns">
            <h1>
              <span>Databases</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{dbskillmessage}</p>

            <div className="bars">
              <ul className="skills">{dbskills}</ul>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
};

export default Resume;
