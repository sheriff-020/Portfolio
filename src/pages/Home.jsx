import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Bg from "../assets/1.mp4";

const home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Web Developer",
        "Frontend Specialist",
        "UI/UX Enthusiast",
        "Tech Innovator",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section id="hero" className="hero section light-background">
        <video
          src={Bg}
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        ></video>

        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center">
              <h2>Issaka Sheriff</h2>
              <p>
                I'm a <span ref={typedRef} className="typed"></span>
              </p>
              <div className="social-links d-flex justify-content-center">
                <a
                  href="https://github.com/sheriff-020"
                  className="github"
                  target="blank"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://wa.me/+233208102626"
                  className="whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>
                <a href="https://x.com/dex_Rex00" target="blank" className="x">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/issaka-shefiwu-88922631b/"
                  className="linkedin"
                  target="blank"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default home;
