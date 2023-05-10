import React from 'react';
import logoBorder from './LeburcLogoBorder.png';
import logoLettering from './LeburcLogoLettering.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo-wrapper">
          <img src={logoBorder} className="App-logo-border" alt="logo" />
        </div>
        <img src={logoLettering} className="App-logo-lettering" alt="logo" />
      </header>
    </div>
  );
}

export default App;
