import "./AboutMe.css"
import { BsStarFill,BsArrowRightCircle,BsArrowLeftCircle } from 'react-icons/bs'
import  { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gif1 from './the astronaut.gif'
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
            <div className="Bx">
                <div className="pContent">
                    <div className="about">
                        <div className="header1" data-aos="fade-right">
                            About me
                        </div>
                        <div className="flex">
                            <div data-aos="fade-left" className="aboutInfo">
                                <p>I am a Biomedical Engineer passionate about web programming. As I always like to say: I was carried away by a CSS code.</p>
                            </div>
                            <div className="gif1">
                                <img src={gif1} alt="" />
                            </div>
                        </div>
                        
                    </div>
                    
                        <div data-aos="fade-right" className="skill">
                            <div className="centerSkills">
                                <div className="header2">
                                    Skills
                                </div>
                                <div className="skillsList">
                                    <ul>
                                        <li data-aos="fade-up">
                                            <div className="logo">
                                                <img src={javascript} alt="" /> 
                                            </div>
                                            JavaScript
                                        </li>
                                        <li data-aos="fade-up">
                                            <div className="logo">
                                                <img src={typescript} alt="" /> 
                                            </div>
                                            TypeScript
                                        </li>
                                        <li data-aos="fade-up">
                                            <div className="logo">
                                                <img src={html} alt="" /> 
                                            </div>
                                            HTML
                                        </li>
                                        <li data-aos="fade-up">
                                            <div className="logo">
                                                <img src={css} alt="" /> 
                                            </div>
                                            CSS
                                        </li>
                                        <li data-aos="fade-up">
                                            <div className="logo">
                                                <img src={react} alt="" /> 
                                            </div>
                                            React
                                        </li>
                                        <li data-aos="fade-up">
                                            <div className="logo">
                                                <img src={git} alt="" /> 
                                            </div>
                                            Git
                                        </li>
                                        <li data-aos="fade-up">
                                            <div className="logo">
                                                <img src={vite} alt="" /> 
                                            </div>
                                            Vite
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> 
                </div>
     
            </div>

        </div>

        </>
    );
}

export default AboutMe ;