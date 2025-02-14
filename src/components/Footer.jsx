import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    const scrollToTopBtn = document.getElementById("scroll-top");

    const handleScroll = () => {
      const scrollToTopBtn = document.getElementById("scroll-top");
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.add("show");
      } else {
        scrollToTopBtn.classList.remove("show");
      }
    };

    const scrollToTop = (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", handleScroll);
    scrollToTopBtn.addEventListener("click", scrollToTop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      scrollToTopBtn.removeEventListener("click", scrollToTop);
    };
  }, []);

  return (
    <>
      <footer id="footer" className="footer position-relative light-background">
        <div className="container" data-aos="zoom-in" data-aos-delay="100">
          <h3 className="sitename">Get In Touch</h3>
          <p>
            I am a passionate web developer dedicated to crafting modern,
            responsive, and user-friendly websites. Specializing in front-end
            and back-end development to bring innovative digital experiences to
            life.
          </p>
          <div className="social-links d-flex justify-content-center">
            <Link
              to="https://github.com/sheriff-020"
              className="github"
              target="blank"
            >
              <i className="bi bi-github"></i>
            </Link>
            <a
              href="https://wa.me/+233208102626"
              className="whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
            <Link to="https://x.com/dex_Rex00" target="blank" className="x">
              <i className="bi bi-twitter-x"></i>
            </Link>
            <Link
              to="https://www.linkedin.com/in/issaka-shefiwu-88922631b/"
              className="linkedin"
              target="blank"
            >
              <i className="bi bi-linkedin"></i>
            </Link>
          </div>
          <div className="container">
            <div className="copyright">
              <span>Copyright</span>{" "}
              <strong className="px-1 sitename">
                {new Date().getFullYear()}
              </strong>
              <span>All Rights Reserved</span>
            </div>
          </div>
        </div>
      </footer>
      {/* Scroll to top */}
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
        style={{ display: "none" }}
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default Footer;
