import "./ProjectCard.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import  { useEffect, useRef, useState } from 'react';
import { PropsWithChildren } from "react";

interface ProjectCardProps extends PropsWithChildren<{
    name: string;
    urlPhoto: string;
    urlInfo: string;
    info: string;
  }> {}
  
  function ProjectCard(props: ProjectCardProps) {

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