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
import Moon from "../moon/Moon";

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
                <Moon moonSize= {400} light1= {350} light2 = {300} iconsize = {450}/>
                </div>
                   <div className="btnMain">
                    <Link to= "/portfolio/">
                        <MainButton info = "Home"/>
                    </Link>   
                    </div>
                </div>
                
              <AboutMe/>

             <div className="separator" data-aos="fade-up">
                    Some things I've Built
             </div>
            <div className="frontBack">
                <div  
                    className="section first">
                    <ProjectCard  name = "Yield Farming Platform"  
                                urlPhoto = "./pokeroi.png" 
                                urlInfo = "https://smilingwitch.github.io/dex-ui/"
                                info ="A Web3 platform interface for cryptocurrency exchange"
                                number = {1} >
                    </ProjectCard>
                </div>
                <div className="section second">
                    <ProjectCard  name = "Pet Park"  
                                urlPhoto = "./PetPark.png" 
                                urlInfo = "https://github.com/SmilingWitch/petpark-ui"
                                info ="Website for pet adoption and the purchase of pet supplies(under development)" 
                                number = {2}>
                    </ProjectCard>
                </div>
                <div className="section therd">
                    <ProjectCard    name = "Cactus Store"  
                                urlPhoto = "./cactus.png" 
                                urlInfo = "https://github.com/SmilingWitch/CactusStore"
                                info ="Website to buy cactus and obtain information about them" 
                                number = {3}>
                    </ProjectCard>
                </div>
                <div className="section four">
                    <ProjectCard    name = "Clinic"  
                                urlPhoto = "./Clinic.png" 
                                urlInfo = "https://smilingwitch.github.io/clinic/"
                                info ="Multiservice clinic with online appointment (under development)
                                " 
                                number = {4}>
                    </ProjectCard>
                </div>
    <Contact/>
    </div>

    </motion.div>
    
             
    );
}


export default Projects 