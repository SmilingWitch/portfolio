import ProjectCard from "../projectCard/ProjectCard";
import "./Projects.css"
import { BsStarFill } from 'react-icons/bs'
import  { useEffect, useRef, useState } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import AboutMe from "../aboutMe/AboutMe";
import Contact from "../contact/Contact";


function Projects() {

    useEffect(() => {
        AOS.init();
    }, [])
    
    return (
        <div className="background2">
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
             </div>
             <AboutMe/>
             <div className="separator">
                    <h1 data-aos="fade-up" >Some things I've Built</h1>
             </div>
            <div className="frontBack">
                <div className="section first">
                    <ProjectCard  data-aos="fade-up"
                                    data-aos-anchor-placement="center-center"
                                 name = "Yield Farming Platform"  
                                urlPhoto = "./pokeroi.png" 
                                urlInfo = "https://www.github.com"
                                info ="A Web3 platform interface for cryptocurrency exchange can be translated as" >
                    </ProjectCard>
                </div>
                <div className="section second">
                    <ProjectCard   data-aos="fade-up"
                                    data-aos-anchor-placement="center-center"  name = "Pet Park"  
                                urlPhoto = "./PetPark.png" 
                                urlInfo = "https://www.github.com"
                                info ="Website for pet adoption and the purchase of pet supplies." >
                    </ProjectCard>
                </div>
                <div  
                    className="section therd"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-center">
                    <ProjectCard    name = "Cactus Store"  
                                urlPhoto = "./cactus.png" 
                                urlInfo = "https://www.github.com"
                                info ="Website to buy cacti and obtain information about them" >
                    </ProjectCard>
                </div>
                <Contact/>
            </div>

        </div>
    );
}

export default Projects 