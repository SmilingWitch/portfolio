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
            <div className="projectCard">
                <div className="projectInfo">
                    <div className="projectName" data-aos="fade-right">
                        <a href={props.urlInfo}>
                            <span>{props.name}</span>
                        </a>
                    </div>
                    <p data-aos="fade-left">{props.info}</p>
                </div>
                <div className="img" data-aos="flip-right" >
                    
                    <img src={props.urlPhoto} alt="" />
                </div>

            </div>

            
        </div>
        
        
    
    );
}

export default ProjectCard ;