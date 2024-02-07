import "./cv.css"
import React from "react";
import User from "../../data/cv/user.svg"
import Email from "../../data/cv/email.svg"
import Phone from "../../data/cv/phone.svg"
import Location from "../../data/cv/location.svg"

const CvItem = ({duration, title, description}) => {
    return (
        <div>
            <h2>{duration}</h2>
            <div style={{paddingLeft: "1em"}}>
                <p className="cv-item-title">{title}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

const CvSkill = ({name, level}) => {
    let skills = [false,false,false,false,false];
    for(let i = 0;i < level;i++) {
        skills[i] = true;
    }
    return (
        <div className="cv-skill">
            <span>{name} </span>
                {skills.map((skill) => (
                    <span className="skill-dot" key={name + (Math.random())} style={{color: skill ? '' : '#858585'}}>•</span>
                ))}
        </div>
    )
}

export default function CV() {
    return (
        <div className="cv-content">
            <section id="personalities">
                <img alt="cv-pic.jpg" src={require(`../../data/cv/cv-pic.jpg`)}/>
                <h1>Personalities</h1>
                    <div className="section-content">
                        <p><img alt="user.svg" src={User}/> Grzegorz Pyrkowski</p>
                        <p><img alt="email.svg" src={Email}/> grz.pyrkowski@gmail.com</p>
                        <p><img alt="phone.svg" src={Phone}/> +48660245285</p>
                        <p><img alt="location.svg" src={Location}/> Wrocław, Polska</p>
                    </div>
            </section>
            <hr/>
            <section id="summary">
                <p>In previous role I worked as software tester but I quickly found web application development much more interesting.
                    I started learning React few months ago and it quickly become my daily routine. In future I would like to become fullstack (MERN) developer.
                    So far I developed skills to create basic portfolio. However I have already few ideas what to take care next and how to expand my knowledge by future projects.
                    I am reliable person, who can dedicate entrusted work. I adapt quickly in the workplace, I like the work both individually and in a team,
                    and I have no problems with contacts with colleagues, superiors or clients.</p>
            </section>
            <hr/>
            <section id="experience">
                <h1>Experience</h1>
                <div className="section-content">
                    <CvItem
                        title="Capgemini - Junior Quality Assurance (Programmer)"
                        duration="11/2022 - 12/2023"
                        description="During work in Capgemini I developed my skills mostly in testing area. Main duties were writing manual tests - test cases, test scenarios, create templates and automating them in several tools depending from needs"
                    />
                    <CvItem
                        title="Capgemini - Tester Starter Kit"
                        duration="08/2022 - 10/2022"
                        description="During internship I was prepared to become software tester. Topics I had to cover were widely connected with testing UI, APIs and also backend"
                    />
                    <CvItem
                        title="Express Pizza - Delivery"
                        duration="01/2021 - 06/2021"
                        description="Completed on-time delivers by choosing best and most efficient ways"
                    />
                </div>
            </section>
            <hr/>
            <section id="education">
                <h1>Education</h1>
                <div className="section-content">
                    <CvItem
                        title="Wyższa Szkoła Informatyki i Zarządzania, Wrocław"
                        duration="09/2018-04/2022"
                        description="Bachelor of Science: Informatics"
                    />
                    <CvItem
                        title="Zespół Szkół Ekonomicznych, Żary"
                        duration="09/2014 - 06/2018"
                        description="IT technician"
                    />
                </div>
            </section>
            <hr/>
            <section id="web-programming">
                <h1>Programming</h1>
                <div className="section-content flex">
                    <CvSkill
                        name="HTML"
                        level={3}
                    />
                    <CvSkill
                        name="CSS"
                        level={2}
                    />
                    <CvSkill
                        name="JavaScript"
                        level={2}
                    />
                    <CvSkill
                        name="jQuery"
                        level={1}
                    />
                    <CvSkill
                        name="React"
                        level={2}
                    />
                    <CvSkill
                        name="Redux"
                        level={1}
                    />
                    <CvSkill
                        name="SQL"
                        level={2}
                    />
                    <CvSkill
                        name="MySQL"
                        level={2}
                    />
                    <CvSkill
                        name="Node.js"
                        level={1}
                    />
                    <CvSkill
                        name="Git"
                        level={3}
                    />
                    <CvSkill
                        name="REST API"
                        level={1}
                    />
                    <CvSkill
                        name="Java"
                        level={1}
                    />
                    <CvSkill
                        name="Azure DevOps"
                        level={1}
                    />
                    <CvSkill
                        name="CI/CD"
                        level={1}
                    />
                </div>
            </section>
            <hr/>
            <section id="testing">
                <h1>Testing</h1>
                <div className="section-content flex">
                    <CvSkill
                        name="Manual"
                        level={3}
                    />
                    <CvSkill
                        name="Automation"
                        level={2}
                    />
                    <CvSkill
                        name="UI Testing"
                        level={2}
                    />
                    <CvSkill
                        name="Cypress"
                        level={2}
                    />
                    <CvSkill
                        name="Selenium"
                        level={2}
                    />
                    <CvSkill
                        name="API Testing"
                        level={2}
                    />
                    <CvSkill
                        name="Postman"
                        level={2}
                    />
                    <CvSkill
                        name="Swagger"
                        level={1}
                    />
                    <CvSkill
                        name="Jira"
                        level={1}
                    />
                    <CvSkill
                        name="JUnit"
                        level={1}
                    />
                    <CvSkill
                        name="Mr. Checker"
                        level={1}
                    />
                    <CvSkill
                        name="Cucumber"
                        level={1}
                    />
                </div>
            </section>
            <hr/>
            <section id="other-skills">
                <h1>Other IT skills</h1>
                <div className="section-content flex">
                    <CvSkill
                        name="Sharepoint"
                        level={2}
                    />
                    <CvSkill
                        name="SDLC"
                        level={2}
                    />
                    <CvSkill
                        name="Agile/Scrum"
                        level={3}
                    />
                    <CvSkill
                        name="Waterfall"
                        level={1}
                    />
                    <CvSkill
                        name="MS Windows"
                        level={3}
                    />
                    <CvSkill
                        name="MS Office"
                        level={2}
                    />
                    <CvSkill
                        name="AD"
                        level={2}
                    />
                    <CvSkill
                        name="GPO"
                        level={2}
                    />
                    <CvSkill
                        name="Photoshop"
                        level={2}
                    />
                    <CvSkill
                        name="Premiere Pro"
                        level={1}
                    />
                </div>
            </section>
            <hr/>
            <section id="languages">
                <h1>Languages</h1>
                <div className="section-content">
                    <p>Polish - native</p>
                    <p>English - high-intermediate (B2)</p>
                </div>
            </section>
        </div>
    )
}