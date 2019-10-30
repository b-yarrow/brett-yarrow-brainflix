import React from 'react'


export default function Header(props) {
    return (
        <header className="header">
            <a href="index.html">
                <img className="header__logo" src={props.logo} alt="Brainflix Logo" />
            </a>
            <nav className="header__list">
                <div className="header__search-container header__list-item--active">
                    {/* <i className="header__search-icon material-icons">search</i> */}
                    <img className="header__search-icon" src={props.search}></img>
                    <input className="header__search-input" type="search" name="profileName" id="fname"
                        placeholder="Search"></input>
                </div>
                <div className="header__list-item">
                    <button className="header__button" name="uploadtButton">
                        <img className="header__button--plus" src={props.upload}></img> UPLOAD
              </button>
                    <div className="header__image-box conversation__image-box--create">
                        <img name="commentImage" className="header__image header__image--create"
                            src={props.profPic} />
                    </div>

                </div>
            </nav>
        </header>
    )
}
