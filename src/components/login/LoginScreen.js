import React from 'react'
import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {
    const navigate=useNavigate();
    const handdleClick=()=>{
navigate('/Hero',{replace:true});

    }
    return (
        <div className="container mt-5">
            <h1>Soy Login screen</h1>
            <button className="btn btn-primary" onClick={handdleClick}>LOGIN</button>
        </div>
    )
}

