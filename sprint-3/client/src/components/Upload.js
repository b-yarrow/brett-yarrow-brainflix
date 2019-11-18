import React from 'react';
import picUpload from '../assets/images/Upload-video-preview.jpg'

export default function Upload(props) {
    return (
        <section className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <div className="upload__container">
                <div className="upload__post upload__post--create">
                    <form className="upload__vidForm" id="uploadForm" onSubmit={props.uploadVid}>
                        <div className="upload__image-title-desc-box">
                            <div className="upload__image-box">
                                <label>VIDEO THUMBNAIL</label>
                                <img name="uploadImage" className="upload__image upload__image--create"
                                    src={picUpload} alt="profile-avatar"></img>
                            </div>
                            <div className="upload__title-desc-box">
                                <div className="upload__vidTitle">
                                    <label htmlFor="ftitle">TITLE YOUR VIDEO</label>
                                    <input className="upload__vidTitle-input" type="text" name="uploadTitle" id="ftitle"
                                        placeholder="Add a title to your video" />
                                </div>
                                <div className="upload__description">
                                    <div className="upload__description-input-container">
                                        <label htmlFor="fcomment">ADD A VIDEO DESCRIPTION</label>
                                        <textarea className="upload__description-input" name="uploadDescription" id="fcomment" cols="5" rows="5" placeholder="Add a description of your video"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="upload__button-box">
                            <button className="upload__button" name="publishButton">
                                PUBLISH
                            </button>
                            <h3 className="upload__cancel">CANCEL</h3>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
