import React, { forwardRef, useEffect, useState } from "react";
import { motion } from "framer-motion"
import './Skills.css';
import { images, lang } from '../../assets/assets';

import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkIcon from '@mui/icons-material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Chip from '@mui/material/Chip';
import { Filter, Opacity } from "@mui/icons-material";

const Skills = forwardRef((props, ref) => {

    const roles = ["Developer", "Designer", "Animator"];
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const clickHandler = (link) => {
        window.open(link, '_blank');
    };

    const links = {
        linkedin: 'https://www.linkedin.com/in/anshuman-bhardwaj-89476b23b',
        twitter: 'https://x.com/A_nshuman',
        web: 'https://anshuman.me/'
    }

<<<<<<< HEAD
    const roles = ["Developer", "Designer", "Animator"];
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);
=======
    // useEffect(() => {

    //     const h51 = document.querySelector('.h51');
    //     const h52 = document.querySelector('.h52');
    //     const h53 = document.querySelector('.h53');

    //     h51.addEventListener('animationend', () => {
    //         h51.style.animation = 'none';
    //         setTimeout(() => {
    //             h51.style.animation = 'h3Anim 2s';
    //         }, 2500);
    //     });

    //     h52.addEventListener('animationend', () => {
    //         h52.style.animation = 'none';
    //         setTimeout(() => {
    //             h52.style.animation = 'h3Anim 2s';
    //         }, 2500);
    //     });

    //     h53.addEventListener('animationend', () => {
    //         h53.style.animation = 'none';
    //         setTimeout(() => {
    //             h53.style.animation = 'h3Anim 2s';
    //         }, 2500);
    //     });

    // }, []);
>>>>>>> 3a8531e (Trustguard)

    return (

        <div className="skills">

            <div className="about">

                <motion.div className="aboutCard"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: '-50px' }}
                >

                    <div className='logo'>
                        <h3>Anshuman<span>Studios</span></h3>
                    </div>

                    <div className="certiBtn">
                        <button className="certi"></button>
                    </div>

                    <div className="social">
                        <LinkedInIcon className="icon" onClick={() => clickHandler(links.linkedin)} />
                        <XIcon className="icon" onClick={() => clickHandler(links.twitter)} />
                        <LinkIcon className="icon" onClick={() => clickHandler(links.web)} />
                    </div>

                    <div className="imgHolder">

                        <div className="mainContent">

                            <img src={images.me} />

                            <div className="textContent">
                                <h1 className="myName">Anshuman Bhardwaj</h1>
                                <div className="text-wrapper">
                                    <h5 key={currentRole} className="role">
                                        {roles[currentRole]}
                                    </h5>
                                </div>
                                <p className="des">Student at <span>NIT Jalandhar</span></p>
                            </div>

                        </div>

                        <p className="aboutPara">
                            I am a creative tech enthusiast. My journey has been a fusion of coding, 3D
                            modeling, animation, photography, and photo editing.
                        </p>

                        <div align="center" className="trophies">
                            <img src="https://github-trophies.vercel.app/?username=A-nshuman&theme=dark_lover&no-frame=false&no-bg=false&margin-w=4&column=3&row=1" />
                        </div>

                    </div>


                </motion.div>

            </div>

            <div className="container">

                <h1 className="heading" style={{ color: '#f4ebd9', textAlign: 'center' }}>Skills</h1>

                <div className="skillsContainer">

                    <div className="skillCard" >
                        <img src={lang.js} />
                        <h3>JavaScript</h3>
                    </div>

                    <div className="skillCard">
                        <img src={lang.typescript} />
                        <h3>Typescript</h3>
                    </div>

                    <div className="skillCard">
                        <img src={lang.next} />
                        <h3>Next.JS</h3>
                    </div>

                    <div className="skillCard">
                        <img src={lang.react} />
                        <h3>React</h3>
                    </div>

                    <div className="skillCard">
                        <img src={lang.nativeWind} />
                        <h3 style={{ fontSize: '17px' }}>NativeWind</h3>
                    </div>

                    <div className="skillCard">
                        <img src={lang.python} />
                        <h3>Python</h3>
                    </div>

                    <div className="skillCard">
                        <img src={lang.mysql} />
                        <h3>MySQL</h3>
                    </div>

                    <div className="skillCard">
                        <img src={lang.blender} />
                        <h3>Blender</h3>
                    </div>

                    <div className="skillCard">
                        <img src={lang.html} />
                        <h3>HTML</h3>
                    </div>

                    <div className="skillCard">
                        <img src={lang.css} />
                        <h3>CSS</h3>
                    </div>

                    <div className="skillCard">
                        <img src={lang.sass} />
                        <h3>Sass</h3>
                    </div>

                    <div className="skillCard">
                        <img src={lang.tailwind} />
                        <h3>Tailwind</h3>
                    </div>

                    <div className="skillCard">
                        <img src={lang.stylus} id='dullIcons' />
                        <h3>Stylus</h3>
                    </div>

                    <div className="skillCard">
                        <img src={lang.node} />
                        <h3>Node.js</h3>
                    </div>

                    <div className="skillCard">
                        <img src={lang.mongo} />
                        <h3>MongoDB</h3>
                    </div>

                    <div className="skillCard">
                        <img src={lang.material} />
                        <h3>Material UI</h3>
                    </div>

                    <div className="skillCard">
                        <img src={lang.android} />
                        <h3>Android</h3>
                    </div>

                    <div className="skillCard">
                        <img src={lang.firebase} />
                        <h3>Firebase</h3>
                    </div>

                    <div className="skillCard">
                        <img src={lang.csharp} />
                        <h3>C#</h3>
                    </div>

                    <div className="skillCard">
                        <img src={lang.flask} id='dullIcons' />
                        <h3>Flask</h3>
                    </div>

                    <div className="skillCard">
                        <img src={lang.django} id='dullIcons' />
                        <h3>Django</h3>
                    </div>

                    <div className="skillCard">
                        <img src={lang.illustrator} />
                        <h3>Illustrator</h3>
                    </div>

                    <div className="skillCard">
                        <img src={lang.photoshop} />
                        <h3>Photoshop</h3>
                    </div>

                    <div className="skillCard">
                        <img src={lang.framer} id="dullIcons" />
                        <h3>Framer</h3>
                    </div>

                    <div className="skillCard">
                        <img src={lang.ae} />
                        <h3>After Effects</h3>
                    </div>

                    <div className="skillCard">
                        <img src={lang.unity} />
                        <h3>Unity</h3>
                    </div>

                    <div className="skillCard">
                        <img src={lang.unreal} id="dullIcons" />
                        <h3>Unreal</h3>
                    </div>

                    <div className="skillCard">
                        <img src={lang.maya} />
                        <h3>Maya</h3>
                    </div>

                    <div className="skillCard">
                        <img src={lang.c4d} />
                        <h3>Cinema 4D</h3>
                    </div>

                </div>

            </div>

        </div>

    );

});

export default Skills;