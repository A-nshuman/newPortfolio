import React, { useRef, useState, useEffect } from "react";
import ProgressBar from "react-scroll-progress-bar";

import LandingPage from "./sections/landingPage/Landing"
import Skills from "./sections/skills/Skills"
import Projects from "./sections/projects/Projects"

import { motion } from "framer-motion"

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FlightIcon from '@mui/icons-material/Flight';

function App() {

    const LandingPageRef = useRef(null);
    const SkillsRef = useRef(null);
    const ProjectsRef = useRef(null);

    const navHome = useRef(null);
    const navSkills = useRef(null);
    const navProjects = useRef(null);

    const scrollRef = useRef(null);
    const scrollProg = useRef(null);
    const airplane = useRef(null);

    const satellite = 'https://awv3node-homepage.surge.sh/build/assets/satellite4.svg'

    const [focusHome, setFocusHome] = useState(true);
    const [focusSkills, setFocusSkills] = useState(false);
    const [focusProjects, setFocusProjects] = useState(false);

    const inFocus = (ref) => {
        if (ref.current) {
            ref.current.style.flex = '4';
            ref.current.style.color = '#202020';
            ref.current.style.background = '#f4ebd9';
        }
    }

    const outFocus = (ref) => {
        if (ref.current) {
            ref.current.style.flex = '1';
            ref.current.style.color = '#f4ebd9';
            ref.current.style.background = '#202020';
        }
    }

    const homeClick = () => {
        setFocusHome(true);
        setFocusSkills(false);
        setFocusProjects(false);
    }

    const skillClick = () => {
        setFocusHome(false);
        setFocusSkills(true);
        setFocusProjects(false);
    }

    const projClick = () => {
        setFocusHome(false);
        setFocusSkills(false);
        setFocusProjects(true);
    }

    focusHome ? inFocus(navHome) : outFocus(navHome);
    focusSkills ? inFocus(navSkills) : outFocus(navSkills);
    focusProjects ? inFocus(navProjects) : outFocus(navProjects);

    const scrollToRef = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    let scrollPrecentage = () => {
        let position = window.scrollY;
        let calcHeight = document.documentElement.scrollHeight - window.innerHeight;
        let scrollValue = Math.round(position * 100 / calcHeight);

        // scrollRef.current.innerHTML = scrollValue + "%";
        // scrollProg.current.style.background = `conic-gradient(#f4ebd9 ${scrollValue}%, #2b2b2b ${scrollValue}%)`;

        airplane.current.style.left = `${scrollValue}%`;
        airplane.current.style.transform = `translateX(-${scrollValue}%)`

        if (position >= 0 && position < SkillsRef.current.getBoundingClientRect().top) {
            homeClick();
        } else if (position >= SkillsRef.current.getBoundingClientRect().top && position < ProjectsRef.current.getBoundingClientRect().top + 600) {
            skillClick();
        } else if (position >= ProjectsRef.current.getBoundingClientRect().top) {
            projClick();
        }
    };

    window.onscroll = scrollPrecentage;

    return (
        <>
            <nav className="navBar">
                <div className="item" onClick={() => { scrollToRef(LandingPageRef); homeClick() }} ref={navHome} >Home</div>
                <div className="item" onClick={() => { scrollToRef(SkillsRef); skillClick() }} ref={navSkills} >Skills</div>
                <div className="item" onClick={() => { scrollToRef(ProjectsRef); projClick() }} ref={navProjects} >Projects</div>
                <div className="progressBar">
                    {/* <FlightIcon className="airplane" ref={airplane} /> */}
                    <img src={satellite} className="satellite" ref={airplane} />
                </div>
            </nav>

            {/* <div className="scrollProgress" ref={scrollProg} >
                <div className="valueHolder" ref={scrollRef} >0%</div>
                <KeyboardArrowUpIcon className="scrollUp" />
            </div> */}

            {/* <ProgressBar bgcolor='#f4ebd9' /> */}

            <div className="juggad" ref={LandingPageRef}></div>
            <LandingPage />
            <div className="juggad" ref={SkillsRef}></div>
            <Skills />
            <div className="juggad" ref={ProjectsRef}></div>
            <Projects />

        </>
    )
}

export default App
