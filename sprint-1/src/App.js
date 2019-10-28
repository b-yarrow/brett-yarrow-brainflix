import React from 'react';
import logo from './logo.svg';
import logoBF from './Logo-brainflix.svg';
import profPic from './blank.jpg'
import './App.css';

function App() {
  return (

    <div className="App">
      <header class="header">
        <a href="index.html">
          <img class="header__logo" src={logoBF} alt="Brainflix Logo" />
        </a>
        <nav class="header__list">
          <div class="header__list-item header__list-item--active">
            <i class="material-icons">search</i>
            <input class="header__name-input" type="search" name="profileName" id="fname"
              placeholder="Enter Your Name"></input>
          </div>
          <div class="header__list-item">
            <button class="header__button" name="uploadtButton">
              + UPLOAD
              </button>
            <div class="header__image-box conversation__image-box--create">
              <img name="commentImage" class="header__image header__image--create"
                src={profPic} />
            </div>

          </div>
        </nav>
      </header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
