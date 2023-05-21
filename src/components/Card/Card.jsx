import React from "react";
import './index.css'

const Card = ({title, link, release}) => {
    return (
        <div className="card-container">
            <img className="card-cover" src={link} alt={title} />
            <h4 className="card-title">{title}</h4>
            <h5 className="card-release-date">{release}</h5>
        </div>
    )
}

export default Card