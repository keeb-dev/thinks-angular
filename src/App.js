import './App.css';
import Thoughts from './components/Thoughts';
import React, { useEffect, useState } from 'react';
import axios from 'axios';



function App() {
  // for some reason this calls the api twice. always. never once.


   const [thinks, setThinks] = useState([]);
   // setThinks is magic, i guess it's defined somewhere weird.

  useEffect(() => {
    getMessages();
  }, []);

  // extra [] is for no infinite loop.

  const getMessages = () => {
    // todo: make the thinks url dynamic or come from config or something.
    axios.get('http://devil:5000/api/thinks').then(response => {
      setThinks(response.data); // somehow sets `thinks` list
    });
  }

  if (!thinks) return null;

  return (
    <div className="App">
      <header className="App-header">
        <Thoughts thinks={thinks} />
      </header>
    </div>
  );
}

export default App;
