import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'

const HomePage = ({ AppProps }) => {
    const dogs = AppProps.dogs;

    return (
        <div >
            <div>
                <h1>Hello we have Animals click one to see more information 😁</h1>
            </div>
            <div className="dogs">
            {dogs.map(d => (
                <div className='dog'>
                    <Link className="link" to={`/dogs/${d.name.toLowerCase()}`}>
                     <img className="images" src={d.src} />
                        <h1>{d.name}</h1>
                    </Link>
                </div>
               
            ))}
             </div>
        </div>

    )
}

export default HomePage;