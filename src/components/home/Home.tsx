import "./Home.css"
import { BsStarFill } from 'react-icons/bs'
import  { useEffect, useRef, useState } from 'react';
import MainButton from "../mainButton/MainButton";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="background">
            <div className="starsBx">
                <div className="lineBx">
                    <div className="line" style={{ "--i": 5 } as React.CSSProperties}></div>
                    <div className="line" style={{ "--i": 8 } as React.CSSProperties}></div>
                    <div className="line" style={{ "--i": 10 } as React.CSSProperties}></div>
                    <div className="line" style={{ "--i": 3 } as React.CSSProperties}></div>
                    <div className="line" style={{ "--i": 8 } as React.CSSProperties}></div>
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

            </div>
            <div className="cont2">
                <div className="moonBx" >
                    <div className="moon1"></div>
                    <div className="moon2"></div>
                    <div className="moon3"> </div>
                    <img src="moon.svg" alt="" />
                    
                </div>
                <div className="info">
                    <div className="centerContent">
                        <div className="header">Daniela Yero</div>
                        <Link to= "/about">
                            <div className="principalBtn">
                                <MainButton></MainButton>
                            </div>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Home ;