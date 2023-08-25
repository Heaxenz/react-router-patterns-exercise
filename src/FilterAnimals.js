import React from 'react';
import {useParams} from 'react-router-dom';
import AppProps from './AppDefaultProps';
import App from './App';
import AnimalDetails from './AnimalDetails';

const FilterAnimals = ({AppProps}) => {
    const {name} = useParams();
    
    if(name) {
        const currentAnimal = AppProps.dogs.find(
            animal => animal.name.toLowerCase() === name.toLowerCase()
        );
        return (
            <AnimalDetails Animal={currentAnimal}/>
        )
    }
   
    return null;

} 

export default FilterAnimals;