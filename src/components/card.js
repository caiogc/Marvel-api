import React from 'react';
import './style.css';

const Card = ({ heroItem }) => {
    return (
        <div>
            <h4>
                 {heroItem.name}
            </h4>
            <p>
                {heroItem.description}
            </p>
            <img src={`${heroItem.thumbnail.path}.${heroItem.thumbnail.extension}`} alt="imagem" className="hero-imagem" />
            
        </div>

    )
}

export default Card;