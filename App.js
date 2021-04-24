import './App.css';
import React, { useState,useEffect } from 'react';
import Home from './Home';
import Loading from './Loading';

function App() {

  const [persons, setPersons] = useState(null); 
  const [isLoading, setIsLoading] = useState(true);

  const storedArray = ['Shashank','Gaurav']; 

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/persons')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setPersons(data);
        setIsLoading(false);
      })
    }, 1000)
  }, []);

  return (
    <div className="App">
      { isLoading && <Loading />}
      { persons && <Home data={ persons } array={ storedArray } /> }
    </div>
  );
}

export default App;
