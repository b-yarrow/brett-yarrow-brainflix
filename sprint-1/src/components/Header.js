import React from 'react'
import profPic from '../assets/images/blank.jpg';
import logoBF from '../assets/images/logos/Logo-brainflix.svg';

export default function Header() {
    return (
        <header className="header">
            <a href="index.html">
                <img className="header__logo" src={logoBF} alt="Brainflix Logo" />
            </a>
            <nav className="header__list">
                <div className="header__search-container header__list-item--active">
                    <i className="header__search-icon material-icons">search</i>
                    <input className="header__search-input" type="search" name="profileName" id="fname"
                        placeholder="Search"></input>
                </div>
                <div className="header__list-item">
                    <button className="header__button" name="uploadtButton">
                        <span className="header__button--plus">+</span> UPLOAD
              </button>
                    <div className="header__image-box conversation__image-box--create">
                        <img name="commentImage" className="header__image header__image--create"
                            src={profPic} />
                    </div>

                </div>
            </nav>
        </header>
    )
}
