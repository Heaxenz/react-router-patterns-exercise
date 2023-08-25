import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react'
import Nav from './Nav';
import AppProps from './AppDefaultProps';
import HomePage from './HomePage';
import FilterAnimals from './FilterAnimals';

//need to finish

function App(props = AppProps) {
 const Animals = AppProps.dogs;
  const [dogs, setDogs] = useState({
    data: Animals
  });
  
 

  return (
    <div className="App">
      <h1>Welcome!</h1>
      <BrowserRouter>
        <Nav dogs={dogs.data} />
        <Routes>
          <Route path="/dogs" element={<HomePage AppProps={AppProps}/>}/>
          <Route path='/' element={<Navigate to="/dogs"/>}/>
          {/* <Route path="*" element={<Navigate to="/dogs"/>} /> */}
          <Route path='/dogs/:name' element={<FilterAnimals AppProps={AppProps}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
