import "./AboutMe.css"
import { BsStarFill,BsArrowRightCircle,BsArrowLeftCircle } from 'react-icons/bs'
import  { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gif1 from './wave(6).svg'
import gif2 from './wave(5).svg'
import {IoLogoJavascript} from "react-icons/io"
import javascript from "./javascript-1.svg"
import typescript from "./typescript.svg"
import css from "./css-3.svg"
import html from "./html-1.svg"
import git from "./git-icon.svg"
import vite from "./vitejs.svg"
import react from "./react.svg"
import AOS from 'aos'
import 'aos/dist/aos.css'


function AboutMe() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (<>
        <div className="background1">
            <div className="wave">
                <img src={gif1} alt="" />
            </div>
            <div className="Bx">
                <div className="pContent">
                    <div className="about">
                        <div className="header1" data-aos="fade-right">
                            About me
                        </div>
                        <div className="flex">
                            <div data-aos="fade-left" className="aboutInfo">
                                <p>                              
                                    I am a passionate biomedical engineer with a strong interest in web development. 
                                    My fascination with technology and desire to create innovative solutions led me to delve into the world of web development.
                                    Currently, I am expanding my skills in the field of design to complement my web development experience. I love exploring new ideas and finding ways to combine my passion for technology with visually appealing aesthetics.
                                    {/*¡Gracias por visitar mi portafolio y espero poder colaborar contigo en futuros proyectos!"*/}
                                    </p>
                                    <span>- As I always like to say: I was carried away by a CSS code -</span>
                            </div>
                        </div>
                    </div>
                    
                    
                        <div  className="skill">
                            <div className="centerSkills" data-aos="fade-right">
                                <div className="header2">
                                    Skills
                                </div>
                                <div className="skillsList">
                                    <ul>
                                    <li data-aos="fade-up">
                                            <div className="logo">
                                                <img src={html} alt="" /> 
                                            </div>
                                           <span>HTML</span> 
                                        </li>
                                        <li data-aos="fade-up">
                                            <div className="logo">
                                                <img src={css} alt="" /> 
                                            </div>
                                            <span>CSS</span> 
                                        </li>
                                        <li data-aos="fade-up">
                                            <div className="logo">
                                                <img src={javascript} alt="" /> 
                                            </div>
                                            <span>JavaScript</span>
                                        </li>
                                        <li data-aos="fade-up">
                                            <div className="logo">
                                                <img src={typescript} alt="" /> 
                                            </div>
                                            <span>TypeScript</span>
                                        </li>
                                        <li data-aos="fade-up">
                                            <div className="logo">
                                                <img src={react} alt="" /> 
                                            </div>
                                            <span>React</span>
                                        </li>
                                        <li data-aos="fade-up">
                                            <div className="logo">
                                                <img src={vite} alt="" /> 
                                            </div>
                                            <span>Vite</span>
                                        </li>
                                        <li data-aos="fade-up">
                                            <div className="logo">
                                                <img src={git} alt="" /> 
                                            </div>
                                           <span>Git</span> 
                                        </li>    
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="wave">
                         <img src={gif2} alt="" />
                    </div> 
                </div>
     
            </div>

        </div>

        </>
    );
}

export default AboutMe ;