import React from "react";

const resume = () => {
  return (
    <>
      <section id="resume" className="resume section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Resume</h2>
          <p>
            I am a results-driven and detail-oriented professional with a proven
            track record of success in web development. Skilled in UX / UI
            development, with a strong ability to solve complex problems or
            manage projects. Adept at working in fast-paced environments and
            collaborating with cross-functional teams to achieve business
            objectives. Passionate about continuous learning and innovation.
          </p>
        </div>

        <div className="container">
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h3 className="resume-title">Details</h3>

              {/* Contact Info */}
              <div className="resume-item pb-0">
                <h4>Contact Info</h4>
                <p>
                  <em>
                    Feel free to reach out via email or phone for any inquiries
                    or collaboration opportunities. Connect with me on LinkedIn
                    or check out my latest projects on GitHub.
                  </em>
                </p>

                <ul>
                  <li>Name: Issaka Sheriff</li>
                  <li>Phone: +233208102626</li>
                  <li>Email: kvngalpha000@gmail.com</li>
                  <li>
                    <a href="https://github.com/sheriff-020" target="new">
                      Github Page <i className="bi bi-box-arrow-up-right"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/issaka-shefiwu-88922631b/"
                      target="new"
                    >
                      LinkedIn Profile{" "}
                      <i className="bi bi-box-arrow-up-right"></i>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Education */}
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Degree in Software Engineering</h4>
                <h5>2022 - 2024</h5>
                <p>
                  <em>
                    Intercom Programming and Manufacturing Company (IPMC College
                    Institute)
                  </em>
                </p>
                <p>
                  Gained hands-on experience in software development,
                  algorithms, and system design. Developed projects using modern
                  programming languages and frameworks, focusing on scalable and
                  efficient solutions. Strengthened problem-solving and
                  collaboration skills through real-world applications and
                  team-based projects.
                </p>
              </div>

              {/* Skills */}
              <h3 className="resume-title">Technical Skills</h3>
              <div className="resume-item">
                <h4>Programming Skills</h4>
                <p>
                  <em>
                    Proficient in front-end and back-end development, with
                    expertise in languages such as JavaScript, Python, and PHP.
                    Skilled in modern frameworks like React, Node.js, and
                    Django, with a strong understanding of database management
                    and API integration.
                  </em>
                </p>
                <ul>
                  <li>Front-end: HTML, CSS, JavaScript, React</li>
                  <li>Back-end: Node.js, PHP, Python</li>
                  <li>Databases: MySQL</li>
                  <li>Tools & Platforms: Git, Firebase</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
              {/* Experience */}
              <h3 className="resume-title">Past Experiences</h3>
              <div className="resume-item">
                <h4>Projects Completed</h4>
                <p>
                  <em>
                    I have developed various front end projects for numerous
                    projects. Currently part of the development team for a
                    freelance website project named 'Whyze' which will offer
                    jobs to people.
                  </em>
                </p>
                <ul>
                  <li>Blogs & Content-Based Websites</li>
                  <li>E-Commerce & Online Stores</li>
                  <li>Business & Corporate Websites</li>
                  <li>Entertainment & Media Websites</li>
                  <li>Real Estate & Property Websites</li>
                  <li>Health & Fitness Websites</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default resume;
