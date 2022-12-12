import React from "react";

const Card = ({ icon, title, text, list }) => {
    return (
        <div>
            <div>
                <img src={icon} alt="icon" />
                <h1>{title}</h1>
                <p>{text}</p>
                <ul>
                    {list.map((text, index) => (
                        <li key={index}>{text}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Card;
