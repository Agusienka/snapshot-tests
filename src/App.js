
import './App.css';
import GitHubCard from './GitHubCard';
import React from 'react';

function App() {
  return (

    <div className="App">
         <h2 style={{color: '#9ba1af', fontSize: '50px'}} className="font-loader">Welcome to my Snapshot-Testing page</h2>
        <a
          className="App-link primary" style={{color: '#9ba1af', fontSize: '30px'}}
          href="https://github.com/Agusienka"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Profile
        </a>
   
    </div>
  );
}


export default App;
