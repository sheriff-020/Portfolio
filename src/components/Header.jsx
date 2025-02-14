import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    const headerToggleBtn = document.querySelector(".header-toggle");

    function headerToggle() {
      document.querySelector("#header").classList.toggle("header-show");
      headerToggleBtn.classList.toggle("bi-list");
      headerToggleBtn.classList.toggle("bi-x");
    }

    headerToggleBtn.addEventListener("click", headerToggle);

    document.querySelectorAll("#navmenu a").forEach((navmenu) => {
      navmenu.addEventListener("click", () => {
        if (document.querySelector(".header-show")) {
          headerToggle();
        }
      });
    });

    document
      .querySelectorAll(".navmenu .toggle-dropdown")
      .forEach((navmenu) => {
        navmenu.addEventListener("click", function (e) {
          e.preventDefault();
          this.parentNode.classList.toggle("active");
          this.parentNode.nextElementSibling.classList.toggle(
            "dropdown-active"
          );
          e.stopImmediatePropagation();
        });
      });

    return () => {
      headerToggleBtn.removeEventListener("click", headerToggle);
    };
  }, []);

  return (
    <header
      id="header"
      className="header d-flex flex-column justify-content-center"
    >
      <i className="header-toggle d-xl-none bi bi-list"></i>
      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              <i className="bi bi-house navicon"></i>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              <i className="bi bi-person navicon"></i>
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className={location.pathname === "/resume" ? "active" : ""}
            >
              <i className="bi bi-file-earmark-text navicon"></i>
              <span>Resume</span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              <i className="bi bi-envelope navicon"></i>
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
