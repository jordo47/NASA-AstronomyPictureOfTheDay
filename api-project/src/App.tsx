import React from 'react';
import logo from './logo.png';
import './App.css';
import PhotoTitleDate from './components/PhotoTitleDate';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PhotoTitleDate/>
      </header>
    </div>
  );
}

export default App;
