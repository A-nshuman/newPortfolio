import React, { useState, useRef, useEffect, forwardRef } from "react";
import { motion } from "framer-motion"

import './Projects.css';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CodeIcon from '@mui/icons-material/Code';
import { Fab, Box, Divider, Tooltip, duration } from '@mui/material';

import { logos, web, lang, images } from '../../assets/assets';

import { useSpring, animated } from "@react-spring/web";
import { transform } from "typescript";
import { image } from "@nextui-org/react";
import LandingPage from "../landingPage/Landing";

const clickHandler = (url) => {
    window.open(`${url}`, '_blank')
};

const urls = {
    aia: "https://anshuai.netlify.app/",
    ttt: "https://anshuttt.netlify.app/",
    todo: "https://a-todolist.netlify.app/",
    temp: "https://convert-a-temp.netlify.app/",
    khoj: "https://khoj-box.netlify.app/",
    bank: "https://aashirvaad-bank.netlify.app/",
    period: "https://aptable.netlify.app/",
    currency: "https://a-currency.netlify.app/",
    samay: "https://samaysathi.netlify.app/",
    bmi: "https://abmicalc.netlify.app/",
    port: "https://anshu-pc.netlify.app/",
    rps: 'https://a-rps.netlify.app/',
    portfolio: 'https://anshuport.netlify.app/'
};


// function Projects() {
const Projects = forwardRef((props, ref) => {

    const [isHover, setHover] = useState(false);

    return (
        <div className="projects">

            <div className="projCont">


                <div className="card" id="anshuai" onClick={() => clickHandler(urls.aia)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <OpenInNewIcon className="openIcon" />
                    <div className="bgImg">
                        <img src={web.aiaWeb} alt="" />
                    </div>
                    <Fab className="webLogo">
                        <img src={logos.aiaLogo} alt="" />
                    </Fab>
                    <div className="content">
                        <h2 className="title">Anshu AI (Gemini Clone)</h2>
                        <div className="contentImgs">
                            <div className="img">
                                <img src={lang.react} alt="react logo" id="reactLogo" />
                                <p>React</p>
                            </div>
                            <div className="img">
                                <img src={lang.sass} alt="sass logo" />
                                <p>Sass</p>
                            </div>
                            <div className="img">
                                <img src={lang.html} alt="html logo" />
                                <p>HTML</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card" id="rps" onClick={() => clickHandler(urls.rps)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <OpenInNewIcon className="openIcon" />
                    <div className="bgImg">
                        <img src={web.rpsWeb} alt="" />
                    </div>
                    <Fab className="webLogo">
                        <img src={logos.rps} alt="" />
                    </Fab>
                    <div className="content">
                        <h2 className="title">Rock-Paper-Scissors</h2>
                        <div className="contentImgs">
                            <div className="img">
                                <img src={lang.react} alt="react logo" id="reactLogo" />
                                <p>React</p>
                            </div>
                            <div className="img">
                                <img src={lang.typescript} alt="typescript logo" />
                                <p>Typescript</p>
                            </div>
                            <div className="img">
                                <img src={lang.tailwind} alt="tailwind logo" />
                                <p>Tailwind</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card" id="portfolio" onClick={() => clickHandler(urls.portfolio)}>
                    <OpenInNewIcon className="openIcon" />
                    <div className="bgImg">
                        <img src={web.portfolio} alt="" />
                    </div>
                    <Fab className="webLogo">
                        <img src={images.anst} alt="" />
                    </Fab>
                    <div className="content">
                        <h2 className="title">Portfolio</h2>
                        <div className="contentImgs">
                            <div className="img">
                                <img src={lang.react} alt="typescript logo" />
                                <p>React</p>
                            </div>
                            <div className="img">
                                <img src={lang.material} alt="stylus logo" />
                                <p>Material UI</p>
                            </div>
                            <div className="img">
                                <img src={lang.framer} alt="html logo" />
                                <p>Framer</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="card" id="todolist" onClick={() => clickHandler(urls.todo)}>
                    <OpenInNewIcon className="openIcon" />
                    <div className="bgImg">
                        <img src={web.todoWeb} alt="" />
                    </div>
                    <Fab className="webLogo">
                        <img src={logos.todoLogo} alt="" />
                    </Fab>
                    <div className="content">
                        <h2 className="title">To-Do List</h2>
                        <div className="contentImgs">
                            <div className="img">
                                <img src={lang.typescript} alt="typescript logo" />
                                <p>Typescript</p>
                            </div>
                            <div className="img">
                                <img src={lang.stylus} alt="stylus logo" id="stylusLogo" />
                                <p>Stylus</p>
                            </div>
                            <div className="img">
                                <img src={lang.html} alt="html logo" />
                                <p>HTML</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card" id="tictactoe" onClick={() => clickHandler(urls.ttt)}>
                    <OpenInNewIcon className="openIcon" />
                    <div className="bgImg">
                        <img src={web.ticWeb} alt="" />
                    </div>
                    <Fab className="webLogo">
                        <img src={logos.tictacLogo} alt="" id="ticLogo" />
                    </Fab>
                    <div className="content">
                        <h2 className="title">Tic-Tac-Toe</h2>
                        <div className="contentImgs">
                            <div className="img">
                                <img src={lang.react} alt="react logo" id="reactLogo" />
                                <p>React</p>
                            </div>
                            <div className="img">
                                <img src={lang.sass} alt="sass logo" />
                                <p>Sass</p>
                            </div>
                            <div className="img">
                                <img src={lang.html} alt="html logo" />
                                <p>HTML</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card" id="tempconvert" onClick={() => clickHandler(urls.temp)}>
                    <OpenInNewIcon className="openIcon" />
                    <div className="bgImg">
                        <img src={web.tempWeb} alt="" />
                    </div>
                    <Fab className="webLogo">
                        <img src={logos.tempLogo} alt="" />
                    </Fab>
                    <div className="content">
                        <h2 className="title">Temperature Converter</h2>
                        <div className="contentImgs">
                            <div className="img">
                                <img src={lang.react} alt="react logo" id="reactLogo" />
                                <p>React</p>
                            </div>
                            <div className="img">
                                <img src={lang.sass} alt="sass logo" />
                                <p>Sass</p>
                            </div>
                            <div className="img">
                                <img src={lang.html} alt="html logo" />
                                <p>HTML</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card" id="khojbox" onClick={() => clickHandler(urls.khoj)}>
                    <OpenInNewIcon className="openIcon" />
                    <div className="bgImg">
                        <img src={web.khojWeb} alt="" id="khojLogo" />
                    </div>
                    <Fab className="webLogo">
                        <img src={logos.khojBoxLogo} alt="" />
                    </Fab>
                    <div className="content">
                        <h2 className="title">Khoj-Box</h2>
                        <div className="contentImgs">
                            <div className="img">
                                <img src={lang.js} alt="javascript logo" />
                                <p>Javascript</p>
                            </div>
                            <div className="img">
                                <img src={lang.sass} alt="sass logo" />
                                <p>Sass</p>
                            </div>
                            <div className="img">
                                <img src={lang.html} alt="html logo" />
                                <p>HTML</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card" id="aashirvaad" onClick={() => clickHandler(urls.bank)}>
                    <OpenInNewIcon className="openIcon" />
                    <div className="bgImg">
                        <img src={web.aashirvaadWeb} alt="" />
                    </div>
                    <Fab className="webLogo">
                        <img src={logos.aashirvaadLogo} alt="" />
                    </Fab>
                    <div className="content">
                        <h2 className="title">Aashirvaad Bank</h2>
                        <div className="contentImgs">
                            <div className="img">
                                <img src={lang.flask} alt="flask logo" id="flaskLogo" />
                                <p>Flask</p>
                            </div>
                            <div className="img">
                                <img src={lang.python} alt="python logo" />
                                <p>Python</p>
                            </div>
                            <div className="img">
                                <img src={lang.mysql} alt="mysql logo" />
                                <p>MySQL</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card" id="periodic" onClick={() => clickHandler(urls.period)}>
                    <OpenInNewIcon className="openIcon" />
                    <div className="bgImg">
                        <img src={web.periodWeb} alt="" />
                    </div>
                    <Fab className="webLogo">
                        <CodeIcon className="noLogo" />
                    </Fab>
                    <div className="content">
                        <h2 className="title">Periodic Table</h2>
                        <div className="contentImgs">
                            <div className="img">
                                <img src={lang.js} alt="javascript logo" />
                                <p>Javascript</p>
                            </div>
                            <div className="img">
                                <img src={lang.sass} alt="sass logo" />
                                <p>Sass</p>
                            </div>
                            <div className="img">
                                <img src={lang.html} alt="html logo" />
                                <p>HTML</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card" id="currency" onClick={() => clickHandler(urls.currency)}>
                    <OpenInNewIcon className="openIcon" />
                    <div className="bgImg">
                        <img src={web.currencyWeb} alt="" />
                    </div>
                    <Fab className="webLogo">
                        <img src={logos.currencyLogo} alt="" />
                    </Fab>
                    <div className="content">
                        <h2 className="title">Currency Covnerter</h2>
                        <div className="contentImgs">
                            <div className="img">
                                <img src={lang.js} alt="javascript logo" />
                                <p>Javascript</p>
                            </div>
                            <div className="img">
                                <img src={lang.sass} alt="sass logo" />
                                <p>Sass</p>
                            </div>
                            <div className="img">
                                <img src={lang.html} alt="html logo" />
                                <p>HTML</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card" id="samay" onClick={() => clickHandler(urls.samay)}>
                    <OpenInNewIcon className="openIcon" />
                    <div className="bgImg">
                        <img src={web.samayWeb} alt="" />
                    </div>
                    <Fab className="webLogo">
                        <img src={logos.samayLogo} alt="" />
                    </Fab>
                    <div className="content">
                        <h2 className="title">Samay Saathi</h2>
                        <div className="contentImgs">
                            <div className="img">
                                <img src={lang.js} alt="javascript logo" />
                                <p>Javascript</p>
                            </div>
                            <div className="img">
                                <img src={lang.sass} alt="sass logo" />
                                <p>Sass</p>
                            </div>
                            <div className="img">
                                <img src={lang.html} alt="html logo" />
                                <p>HTML</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card" id="bmi" onClick={() => clickHandler(urls.bmi)}>
                    <OpenInNewIcon className="openIcon" />
                    <div className="bgImg">
                        <img src={web.bmiWeb} alt="" />
                    </div>
                    <Fab className="webLogo">
                        <img src={logos.bmiLogo} alt="" />
                    </Fab>
                    <div className="content">
                        <h2 className="title">BMI Calculator</h2>
                        <div className="contentImgs">
                            <div className="img">
                                <img src={lang.js} alt="javascript logo" />
                                <p>Javascript</p>
                            </div>
                            <div className="img">
                                <img src={lang.sass} alt="sass logo" />
                                <p>Sass</p>
                            </div>
                            <div className="img">
                                <img src={lang.html} alt="html logo" />
                                <p>HTML</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card" id="port" onClick={() => clickHandler(urls.port)}>
                    <OpenInNewIcon className="openIcon" />
                    <div className="bgImg">
                        <img src={web.portWeb} alt="" />
                    </div>
                    <Fab className="webLogo">
                        <img src='https://anshu-pc.netlify.app/images/Untitled.png' alt="" />
                    </Fab>
                    <div className="content">
                        <h2 className="title">Old Portfolio</h2>
                        <div className="contentImgs">
                            <div className="img">
                                <img src={lang.js} alt="javascript logo" />
                                <p>Javascript</p>
                            </div>
                            <div className="img">
                                <img src={lang.sass} alt="sass logo" />
                                <p>Sass</p>
                            </div>
                            <div className="img">
                                <img src={lang.html} alt="html logo" />
                                <p>HTML</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
});

export default Projects