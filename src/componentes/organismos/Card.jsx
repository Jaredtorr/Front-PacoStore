import React from "react";
import { useNavigate } from 'react-router-dom';
import './Card.css';

const Card = ({ src, Titulo, descripcion, Precio, text, className, isNewArrival, redirectTo }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(redirectTo);
    };

    return (
        <div className={className}>
            {isNewArrival && <div className="new-arrival">New Arrival</div>}
            <img src={src} alt={Titulo} className="card-image" />
            <h3>{Titulo}</h3>
            <p>{descripcion}</p>
            <p>{Precio}</p>
            <button className="card-button" onClick={handleClick}>{text}</button>
        </div>
    );
}

export default Card;
