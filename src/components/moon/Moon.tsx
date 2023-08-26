import "./Moon.css"

function Moon( props:{ moonSize: number, light1: number, light2: number }) {
    return (
        <div className="moonBx2">
        <div className="moon4" style ={{ "--moonSize": {moonSize}} as React.CSSProperties}> </div>
        <div className="moon5" ></div>
        <div className="moon6"> </div>
        <img src="moon.svg" alt="" />
        
    </div>  
    );
}

export default Moon ;