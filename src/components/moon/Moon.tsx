import "./Moon.css"

function Moon( props:{ moonSize: number; light1: number; light2: number; iconsize: number }) {
    return (
        <div className="moonBx2">
        <div className="moon4" style ={{ "--moonSize": `${props.moonSize}px`} as React.CSSProperties}></div>
        <div className="moon5" style ={{ "--light1": `${props.light1}px`} as React.CSSProperties}></div>
        <div className="moon6" style ={{ "--light2": `${props.light2}px`} as React.CSSProperties}> </div>
        <img src="moon.svg" alt="" style ={{ "--iconsize": `${props.iconsize}px`} as React.CSSProperties}/>
        
    </div>  
    );
}

export default Moon ;