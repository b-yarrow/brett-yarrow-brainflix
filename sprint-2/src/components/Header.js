import React from 'react'
import { Link } from 'react-router-dom'


export default function Header(props) {
    return (
        <header className="header">
            <div className="header__logo-box">
                <Link to="/">
                    <img className="header__logo" src={props.logo} alt="Brainflix Logo" />
                </Link>
            </div>
            <nav className="header__list">
                <div className="header__search-container">
                    {/* <i className="header__search-icon material-icons">search</i> */}
                    <img className="header__search-icon" src={props.search} alt="Search Icon"></img>
                    <input className="header__search-input" type="search" name="profileName" id="fname"
                        placeholder="Search"></input>
                </div>
                <div className="header__upload-section">
                    <Link to="/upload">
                        <button className="header__button" name="uploadtButton">
                            <img className="header__button--plus" src={props.upload} alt="Plus Icon"></img><span className="header__button--text">UPLOAD</span>
                        </button>
                    </Link>
                    <div className="header__image-box">
                        <img name="commentImage" className="header__image header__image--create"
                            src={props.profPic} alt="Profile" />
                    </div>

                </div>
            </nav>
        </header>
    )
}
