import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css'

const Nav = ({dogs}) => {
   
    
    return (
        <div className="back-nav">
            <Link className="links" to="/dogs">
                Home
            </Link >
            {dogs.map(data => (
                <Link className="links" to={`dogs/${data.name}`}>
                    {data.name}
                </Link>
            ))}
        </div>
    )
}

export default Nav;