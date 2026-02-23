// import React, { useState, useRef, useEffect } from "react";

// import './Landing.css';

// import { web } from '../../assets/assets';

// import { Parallax, ParallaxLayer } from '@react-spring/parallax'

// function LandingPage() {


//     return (

//         <div className="landingPage">
//             <div className="bg" style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }}></div>
//             <div className='logo'>
//                 <h1>Anshuman<span>Studios</span></h1>
//             </div>
//         </div>

//     );
// }

// export default LandingPage;

import { useState, useEffect, forwardRef } from 'react';
import { lang, logos } from '../../assets/assets';
import './Landing.css';

import { Fab } from '@mui/material';

import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// function LandingPage() {
const LandingPage = forwardRef((props, ref) => {

    // for parallax
    const [scrollY, setScrollY] = useState(0);

    const url = (name, wrap = false) =>
        `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const logoStyle = {
        transform: `translateY(${scrollY * 0.5}px)`,
    };

    const bgStyle = {
        backgroundPositionY: `${-scrollY * 0.2}px`,
    };

    const cloudStyle = {
        left: `${-scrollY * 1}px`,
    };
    // parallax over

    const clickHandler = (url) => {
        window.open(`${url}`, '_blank')
    };

    const links = {
        twitter: 'https://twitter.com/A_nshuman',
        insta: 'https://www.instagram.com/anshu_man_man',
        linkedin: 'https://www.linkedin.com/in/anshuman-bhardwaj-89476b23b',
        github: 'https://github.com/A-nshuman',
        codepen: 'https://codepen.io/MrAnshuman',
    };

    return (
        <div className="landingPage">

            <div className="bg" style={{ ...bgStyle, backgroundImage: url('stars', true), backgroundSize: 'cover' }}></div>
            
            <div className='logo' style={logoStyle}>
                <h1>Anshuman<span>Studios</span></h1>
            </div>
            
            <div className="contactCircles" style={logoStyle}>

                {/* <Fab varient='outlined' size='30px' className='newBtn' onClick={() => clickHandler(links.twitter)}>
                    <XIcon />
                </Fab> */}

                <Fab varient='outlined' size='30px' className='newBtn' onClick={() => clickHandler(links.insta)}>
                    <InstagramIcon />
                </Fab>

                <Fab varient='outlined' size='30px' className='newBtn' onClick={() => clickHandler(links.github)}>
                    <GitHubIcon />
                </Fab>

                <Fab varient='outlined' size='30px' className='newBtn'  onClick={() => clickHandler(links.linkedin)}>
                    <LinkedInIcon />
                </Fab>

                <Fab varient='outlined' size='30px' className='newBtn'  onClick={() => clickHandler(links.codepen)}>
                    <img src={logos.codepen} id='codepenLogo' />
                </Fab>

            </div>

        </div>
    );
});

export default LandingPage;
// import React, { useState, useRef, useEffect } from "react";

// import './Landing.css';

// import { web } from '../../assets/assets';

// import { Parallax, ParallaxLayer } from '@react-spring/parallax'

// function LandingPage() {


//     return (

//         <div className="landingPage">
//             <div className="bg" style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }}></div>
//             <div className='logo'>
//                 <h1>Anshuman<span>Studios</span></h1>
//             </div>
//         </div>

//     );
// }

// export default LandingPage;

import { useState, useEffect, forwardRef } from 'react';
import { lang, logos } from '../../assets/assets';
import './Landing.css';

import { Fab } from '@mui/material';

import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// function LandingPage() {
const LandingPage = forwardRef((props, ref) => {

    // for parallax
    const [scrollY, setScrollY] = useState(0);

    const url = (name, wrap = false) =>
        `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const logoStyle = {
        transform: `translateY(${scrollY * 0.5}px)`,
    };

    const bgStyle = {
        backgroundPositionY: `${-scrollY * 0.2}px`,
    };

    const cloudStyle = {
        left: `${-scrollY * 1}px`,
    };
    // parallax over

    const clickHandler = (url) => {
        window.open(`${url}`, '_blank')
    };

    const links = {
        twitter: 'https://twitter.com/A_nshuman',
        insta: 'https://www.instagram.com/anshu_man_man',
        linkedin: 'https://www.linkedin.com/in/anshuman-bhardwaj-89476b23b',
        github: 'https://github.com/A-nshuman',
        codepen: 'https://codepen.io/MrAnshuman',
    };

    return (
        <div className="landingPage">

            <div className="bg" style={{ ...bgStyle, backgroundImage: url('stars', true), backgroundSize: 'cover' }}></div>
            
            <div className='logo' style={logoStyle}>
                <h1>Anshuman<span>Studios</span></h1>
            </div>
            
            <div className="contactCircles" style={logoStyle}>

                {/* <Fab varient='outlined' size='30px' className='newBtn' onClick={() => clickHandler(links.twitter)}>
                    <XIcon />
                </Fab> */}

                <Fab varient='outlined' size='30px' className='newBtn' onClick={() => clickHandler(links.insta)}>
                    <InstagramIcon />
                </Fab>

                <Fab varient='outlined' size='30px' className='newBtn' onClick={() => clickHandler(links.github)}>
                    <GitHubIcon />
                </Fab>

                <Fab varient='outlined' size='30px' className='newBtn'  onClick={() => clickHandler(links.linkedin)}>
                    <LinkedInIcon />
                </Fab>

                <Fab varient='outlined' size='30px' className='newBtn'  onClick={() => clickHandler(links.codepen)}>
                    <img src={logos.codepen} id='codepenLogo' />
                </Fab>

            </div>

        </div>
    );
});

export default LandingPage;