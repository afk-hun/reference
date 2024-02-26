import { ReactNode, useEffect, useState, MouseEvent } from "react";
import "./elements.scss";

type NameProps = {
  first: string;
  middle: string;
  last: string;
  role: string;
};

export function Name(props: NameProps) {
  const { first, middle, last, role } = props;
  return (
    <div className="name">
      <div className="name-container">
        <h1 className="text first">{first}</h1>
        <h1 className="text">{middle}</h1>
        <h1 className="text">{last}</h1>
      </div>
      <h3 className="role">{role}</h3>
    </div>
  );
}

function MainTitle({ title }: MainContainerProps) {
  return <h2 className="main-title">{title}</h2>;
}

type MainContainerProps = {
  title: string;
  children?: ReactNode;
};

type MainDescriptionProps = {
  description: string;
};

type TextProp = {
  text: string;
};

type WorkExperienceTitleProp = TextProp & {
  subtext: string;
};

function WorkExperienceTitle(props: WorkExperienceTitleProp) {
  return (
    <div className="work-experience-title">
      <h1 className="we title">{props.text}</h1>
      <h1 className="we subtitle">{props.subtext && `(${props.subtext})`}</h1>
    </div>
  );
}
function WorkExperiencePlace(props: TextProp) {
  return <h1 className="we place">{props.text}</h1>;
}

function DarkText(props: TextProp) {
  return <h1 className="dark-text">{props.text}</h1>;
}

function LightText(props: TextProp) {
  return <h1 className="light-text">{props.text}</h1>;
}
function MainDescription(props: MainDescriptionProps) {
  return <p className="main-description">{props.description}</p>;
}

function MainContainer(props: MainContainerProps) {
  return (
    <div className="main-container">
      <MainTitle title={props.title}></MainTitle>
      {props.children}
    </div>
  );
}

type AboutMeProps = {
  children: string;
};

export function AboutMe(props: AboutMeProps) {
  return (
    <MainContainer title="About Me">
      <MainDescription description={props.children}></MainDescription>
    </MainContainer>
  );
}

type WorkType = {
  interval: string;
  position: string;
  unit: string;
  company: string;
  place: string;
  description: string[];
};

function WorkExperienceContainer(props: WorkType) {
  const { interval, position, unit, company, place, description } = props;
  return (
    <div className="work-experience">
      <div className="work-experience-container">
        <DarkText text={interval} />
        <div className="work-experience-details">
          <WorkExperienceTitle text={position} subtext={unit} />
          <WorkExperiencePlace text={`${company} - ${place}`} />
          {description.map((desc) => {
            return <MainDescription key={Math.random()} description={desc} />;
          })}
        </div>
      </div>
    </div>
  );
}

type WorkExperienceProps = {
  experiences: WorkType[];
};

export function WorkExperience(props: WorkExperienceProps) {
  return (
    <MainContainer title="Work Experience">
      {props.experiences.map((experience) => {
        return (
          <WorkExperienceContainer key={experience.interval} {...experience} />
        );
      })}
    </MainContainer>
  );
}

type SkillsProps = {
  hard: string[];
  soft: string[];
};

type SkillsType = {
  skills: string[];
};
function SkillList(props: SkillsType) {
  return (
    <div className="skills">
      {props.skills.map((skill) => {
        return <DarkText key={skill} text={skill} />;
      })}
    </div>
  );
}

export function Skills(props: SkillsProps) {
  const { hard, soft } = props;
  return (
    <MainContainer title="Skills">
      <div className="skill-container">
        <SkillList skills={hard} />
        <SkillList skills={soft} />
      </div>
    </MainContainer>
  );
}

export function ProfileImage() {
  return <div className="profile-image" />;
}

type SchoolProps = {
  degree: string;
  institution: string;
  interval: string;
};

function SchoolElement(props: SchoolProps) {
  const { degree, institution, interval } = props;
  return (
    <div className="school-container">
      <DarkText text={degree} />
      <div className="school-details">
        <LightText text={institution} />
        <LightText text={interval} />
      </div>
    </div>
  );
}

type EducationType = {
  school: SchoolProps[];
  courses: string[];
};

export function Education(props: EducationType) {
  return (
    <MainContainer title="Education">
      {props.school.map((schl) => {
        return <SchoolElement key={schl.degree} {...schl} />;
      })}

      <div className="school-container">
        <DarkText text="Courses" />
        {props.courses.map((course) => {
          return (
            <div className="school-details" key={course}>
              <LightText text={course} />
            </div>
          );
        })}
      </div>
    </MainContainer>
  );
}

type LanguageProps = {
  language: string;
  knowledge: number;
  motivation: number;
};

function Language(props: LanguageProps) {
  const [knowledgeWidth, setKnowledgeWidth] = useState(0);
  const [motivationWidth, setMotivationWidth] = useState(0);

  //const knowledgeWidth = `${props.knowledge}%`;
  //const motivationWidth = `${props.motivation}%`;

  useEffect(() => {
    setKnowledgeWidth(props.knowledge);
    setMotivationWidth(props.motivation);
  }, [props, knowledgeWidth, motivationWidth]);

  return (
    <div className="language-container">
      <p className="language-title">{props.language}</p>
      <div className="language-colorbox">
        <div
          className="language-knowledge"
          style={{ width: `${knowledgeWidth}%` }}
        />
        <div
          className="language-motivation"
          style={{ width: `${motivationWidth}%` }}
        />
      </div>
    </div>
  );
}

type LanguagesType = {
  name: string;
  knowledge: number;
  motivation: number;
};

export function Languages(props: { languages: LanguagesType[] }) {
  return (
    <MainContainer title="Language">
      <div className="languages-container">
        {props.languages.map((item) => {
          return (
            <Language
              key={item.name}
              language={item.name}
              knowledge={item.knowledge}
              motivation={item.motivation}
            />
          );
        })}
        <div className="languages-hint">
          <p className="languages-knowledge">knowledge</p>
          <p className="languages-motivation">motivation to improve</p>
        </div>
      </div>
    </MainContainer>
  );
}

type InterestsProps = {
  interests: string[];
};

export function Interest(props: InterestsProps) {
  return (
    <MainContainer title="Interests">
      <div className="interests-container">
        {props.interests.map((interest) => {
          return <LightText key={interest} text={interest} />;
        })}
      </div>
    </MainContainer>
  );
}

type FindMeProps = {
  mail: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
};

type ContactType = {
  image?: string;
  name: string;
  link?: string;
  type: "link" | "mail" | "none";
};

function ContactItem(props: ContactType) {
  const { image, name, link, type } = props;

  return (
    <div className="contact-container">
      <div className="contact-type-icon" />
      {type === "none" && <div className="contact-">{name}</div>}
      {type === "mail" && (
        <a className="contact-" href={`mailto:${link}`}>
          {name}
        </a>
      )}
      {type === "link" && (
        <a className="contact-" href={link} target="_blank" rel="noreferrer">
          {name}
        </a>
      )}
    </div>
  );
}

export function FindMe(props: FindMeProps) {
  const { phone, mail, location, linkedin, github } = props;
  return (
    <MainContainer title="Find Me">
      <div className="find-me-container">
        <ContactItem name={phone} type={"none"} />
        <ContactItem name={mail} type={"mail"} link={mail} />
        <ContactItem name="Ákos Ferenc Kalamár" type={"link"} link={linkedin} />
        <ContactItem name="afk-hun" type={"link"} link={github} />
        <ContactItem name={location} type={"none"} />
      </div>
    </MainContainer>
  );
}
