import ProjectCard from "../projectCard/ProjectCard";
import "./Projects.css"
import { BsStarFill } from 'react-icons/bs'
import  { useEffect, useRef, useState } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import AboutMe from "../aboutMe/AboutMe";
import Contact from "../contact/Contact";
import MainButton from "../mainButton/MainButton";
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

function Projects() {

    useEffect(() => {
        AOS.init();
    }, [])
    
    return (
        <motion.div className="background2"
                    initial = {{opacity: 0}}
                    animate = {{opacity: 1}}
                    exit = {{opacity:0}}>
            <div className="secundaryBack">
            <div className="stars2" >
                    <div className="star" style={{ "--j": 5 } as React.CSSProperties}>
                        <BsStarFill></BsStarFill>
                    </div>
                    <div className="star" style={{ "--j": 8 } as React.CSSProperties}>
                        <BsStarFill></BsStarFill>
                    </div>
                    <div className="star" style={{ "--j": 10 } as React.CSSProperties}>
                        <BsStarFill></BsStarFill>
                    </div>
                    <div className="star" style={{ "--j": 3 } as React.CSSProperties}>
                        <BsStarFill></BsStarFill>
                    </div>
                    <div className="star" style={{ "--j": 8 } as React.CSSProperties}>
                        <BsStarFill></BsStarFill>
                    </div>
                    <div className="star" style={{ "--j": 5 } as React.CSSProperties}>
                        <BsStarFill></BsStarFill>
                    </div>
                    <div className="star" style={{ "--j": 8 } as React.CSSProperties}>
                        <BsStarFill></BsStarFill>
                    </div>
                    <div className="star" style={{ "--j": 10 } as React.CSSProperties}>
                        <BsStarFill></BsStarFill>
                    </div>
                    <div className="star" style={{ "--j": 3 } as React.CSSProperties}>
                        <BsStarFill></BsStarFill>
                    </div>
                </div>
                <div className="moonBx1">
                    <div className="moon1"></div>
                    <div className="moon2"></div>
                    <div className="moon3"> </div>
                    <img src="moon.svg" alt="" />   
                </div>
                    <div className="btnMain">
                    <Link to= "/">
                        <MainButton info = "Home"/>
                    </Link>   
                    </div>
             </div>
             
             <AboutMe/>
             <div className="separator">
                    <h1 data-aos="fade-up" >Some things I've Built</h1>
             </div>
            <div className="frontBack">
                <div  
                    className="section first">
                    <ProjectCard  name = "Yield Farming Platform"  
                                urlPhoto = "./pokeroi.png" 
                                urlInfo = "https://github.com/SmilingWitch/PkrRmaiFarm-ui"
                                info ="A Web3 platform interface for cryptocurrency exchange can be translated as" >
                    </ProjectCard>
                </div>
                <div className="section second">
                    <ProjectCard  name = "Pet Park"  
                                urlPhoto = "./PetPark.png" 
                                urlInfo = "https://github.com/SmilingWitch/petpark-ui"
                                info ="Website for pet adoption and the purchase of pet supplies." >
                    </ProjectCard>
                </div>
                <div  
                    className="section therd">
                    <ProjectCard    name = "Cactus Store"  
                                urlPhoto = "./cactus.png" 
                                urlInfo = "https://github.com/SmilingWitch/CactusStore"
                                info ="Website to buy cacti and obtain information about them" >
                    </ProjectCard>
                </div>
                <Contact/>
            </div>

        </motion.div>
    );
}

export default Projects 