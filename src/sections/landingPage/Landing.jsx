import { useState, useEffect, forwardRef } from "react";
import { logos } from "../../assets/assets";
import "./Landing.css";

import { Fab } from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const LandingPage = forwardRef((props, ref) => {

  // Parallax scroll state
  const [scrollY, setScrollY] = useState(0);

  // Background image helper
  const url = (name, wrap = false) =>
    `${wrap ? "url(" : ""}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
      wrap ? ")" : ""
    }`;

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Parallax styles
  const logoStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
  };

  const bgStyle = {
    backgroundPositionY: `${-scrollY * 0.2}px`,
  };

  // Open links
  const clickHandler = (url) => {
    window.open(url, "_blank");
  };

  // Social links
  const links = {
    insta: "https://www.instagram.com/anshu_man_man",
    linkedin: "https://www.linkedin.com/in/anshuman-bhardwaj-89476b23b",
    github: "https://github.com/A-nshuman",
    codepen: "https://codepen.io/MrAnshuman",
  };

  return (
    <div className="landingPage" ref={ref}>

      {/* Background */}
      <div
        className="bg"
        style={{
          ...bgStyle,
          backgroundImage: url("stars", true),
          backgroundSize: "cover",
        }}
      />

      {/* Logo */}
      <div className="logo" style={logoStyle}>
        <h1>
          Anshuman<span>Studios</span>
        </h1>
      </div>

      {/* Social Buttons */}
      <div className="contactCircles" style={logoStyle}>

        <Fab
          variant="outlined"
          size="small"
          className="newBtn"
          onClick={() => clickHandler(links.insta)}
        >
          <InstagramIcon />
        </Fab>

        <Fab
          variant="outlined"
          size="small"
          className="newBtn"
          onClick={() => clickHandler(links.github)}
        >
          <GitHubIcon />
        </Fab>

        <Fab
          variant="outlined"
          size="small"
          className="newBtn"
          onClick={() => clickHandler(links.linkedin)}
        >
          <LinkedInIcon />
        </Fab>

        <Fab
          variant="outlined"
          size="small"
          className="newBtn"
          onClick={() => clickHandler(links.codepen)}
        >
          <img src={logos.codepen} alt="CodePen" id="codepenLogo" />
        </Fab>

      </div>
    </div>
  );
});

export default LandingPage;