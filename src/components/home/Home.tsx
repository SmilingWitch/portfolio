import "./Home.css"
import { BsStarFill } from 'react-icons/bs'
import  { useEffect, useRef, useState } from 'react';
import MainButton from "../mainButton/MainButton";
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import Moon from "../moon/Moon";

function Home() {
    return (
        <motion.div className="background"
                    initial = {{opacity: 0}}
                    animate = {{opacity: 1}}
                    exit = {{opacity:0}}
                    >
            <div className="starsBx">
                <div className="lineBx">
                    <div className="line" style={{ "--i": 5 } as React.CSSProperties}></div>
                    <div className="line" style={{ "--i": 8 } as React.CSSProperties}></div>
                    <div className="line" style={{ "--i": 10 } as React.CSSProperties}></div>
                    <div className="line" style={{ "--i": 3 } as React.CSSProperties}></div>
                    <div className="line" style={{ "--i": 5 } as React.CSSProperties}></div>
                    <div className="line" style={{ "--i": 5 } as React.CSSProperties}></div>
                    <div className="line" style={{ "--i": 8 } as React.CSSProperties}></div>
                    <div className="line" style={{ "--i": 10 } as React.CSSProperties}></div>
                    <div className="line" style={{ "--i": 3 } as React.CSSProperties}></div>
                </div>
                <div className="stars" >
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
                    <div className="star" style={{ "--j": 5 } as React.CSSProperties}>
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

            </div>
            <div className="cont2">
                <div className="moonBx" >
                <Moon moonSize= {400} light1= {350} light2 = {300} iconsize= {450}/>
                </div>
                <div className="info">
                    <div className="centerContent">
                        <div className="header">
                            <div className="name">Daniela Yero</div>
                            <div className="occupation">- Front End Developer -</div> 
                        </div>
                        <Link to= "/portfolio/about">
                            <div className="principalBtn">
                                <MainButton info ="Meet me" ></MainButton>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Home ;