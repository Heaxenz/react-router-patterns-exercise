import React from 'react';
import './AnimalDetails.css'
import {Link} from 'react-router-dom'

const AnimalDetails = ({Animal}) => {
    console.log(Animal)
    return (
        <div>
            <img className="image" src={Animal.src}/>
            <h1>{Animal.name}</h1>
            <h2>{Animal.name} is {Animal.age} years old.</h2>
            <ul>
            {Animal.facts.map(d => (
                <li>{d}</li>
                ))}
            </ul>
            
            <Link className="goback" to="/dogs">
                Go Back
            </Link>
        </div>
    )
}

export default AnimalDetails;