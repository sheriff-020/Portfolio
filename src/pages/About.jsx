import React from "react";
import Bg from "../assets/bg.jpg";

// Skills Items
const skillsData = [
  { name: "HTML", percentage: 100 },
  { name: "CSS", percentage: 95 },
  { name: "JavaScript (React Js / Next Js )", percentage: 88 },
  { name: "PHP", percentage: 80 },
  { name: "WordPress/CMS", percentage: 70 },
  { name: "Bootstrap / Tailwind CSS", percentage: 85 },
  { name: "React Js / Next Js", percentage: 80 },
  { name: "MYSQL", percentage: 90 },
  { name: "Python", percentage: 80 },
  { name: "Git / Node Js / Django", percentage: 80 },
];

const about = () => {
  return (
    <>
      <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <h2>About</h2>
          <p>
            I am a passionate UI/UX Designer & Web Developer with a strong focus
            on creating intuitive and visually appealing user experiences. With
            years of experience in the industry, I specialize in designing and
            developing modern, responsive websites that enhance user engagement
            and satisfaction.
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src={Bg} className="img-fluid" alt="Profile" />
            </div>
            <div className="col-lg-8 content">
              <h2>UI/UX Designer & Web Developer.</h2>
              <p className="fst-italic py-3">
                Using seamless digital experiences through innovative design and
                cutting-edge development.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Gender:</strong> <span>Male</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Country:</strong> <span>Ghana</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Phone:</strong> <span>+233208102626</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>City:</strong> <span>Ablekuma, Accra</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>College:</strong> <span>IPMC Institute</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Certificate:</strong> <span>Degree</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Email:</strong>
                      <span>kvngalpha000@gmail.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="py-3">
                I strive to bridge the gap between design and functionality,
                ensuring that every project I work on is both aesthetically
                pleasing and highly functional. Let's create something amazing
                together!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ******** Skills ******** */}
      <section id="skills" className="skills section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Technical Expertise</h2>
          <p>
            Proficient in a range of technologies, from front-end development to
            backend systems, ensuring efficient and scalable solutions.
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row skills-content skills-animation">
            {[0, 1].map((col) => (
              <div className="col-lg-6" key={col}>
                {skillsData.slice(col * 5, col * 5 + 5).map((skill, index) => (
                  <div className="progress" key={index}>
                    <span className="skill">
                      <span>{skill.name}</span>{" "}
                      <i className="val">{skill.percentage}%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${skill.percentage}%` }}
                        aria-valuenow={skill.percentage}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
