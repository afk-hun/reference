import {
  AboutMe,
  Education,
  FindMe,
  Interest,
  Languages,
  Name,
  ProfileImage,
  Skills,
  WorkExperience,
} from "../components/resume/Elements";
import resume from "../local/resume.json";

import "./resume.scss";

export default function Resume() {
  const { name, about_me, education, interests, contact } = resume.afk;
  const { experiences, skills } = resume.afk.work;
  return (
    <div className="resume-container">
      <div className="resume-left-side">
        <Name
          first={name.first}
          middle={name.middle}
          last={name.last}
          role={name.role}
        ></Name>
        <AboutMe>{about_me}</AboutMe>
        <WorkExperience experiences={experiences} />
        <Skills hard={skills.hard} soft={skills.soft} />
      </div>
      <div className="resume-right-side">
        <ProfileImage />
        <Education school={education.school} courses={education.courses} />
        <Languages languages={education.languages} />
        <Interest interests={interests} />
        <FindMe {...contact} />
      </div>
    </div>
  );
}
