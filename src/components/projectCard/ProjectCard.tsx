import "./ProjectCard.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import  { useEffect, useRef, useState } from 'react';


function ProjectCard(props:{ name: string, urlInfo: string, urlPhoto: string, info: string }) {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="projectCardBx">
            <div className="projectCard" 
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-center">
                
                <div className="projectInfo">
                    <div className="projectName">
                        <span>{props.name}</span>
                    </div>
                    <p>{props.info}</p>
                </div>
                <div className="img">
                    <img src={props.urlPhoto} alt="" />
                </div>

            </div>

            
        </div>
        
        
    
    );
}

export default ProjectCard ;