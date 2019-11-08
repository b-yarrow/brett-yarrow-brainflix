import React from 'react';
import picUpload from '../assets/images/Upload-video-preview.jpg'

export default function Upload() {
    return (
        <section className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <div className="upload__container">
                <div className="upload__post upload__post--create">

                    <div className="upload__image-box upload__image-box--create">
                        <label>VIDEO THUMBNAIL</label>
                        <img name="uploadImage" className="upload__image upload__image--create"
                            src={picUpload} alt="profile-avatar"></img>
                    </div>
                    <form className="upload__name--create" id="commentForm">
                        <label for="fname">TITLE YOUR VIDEO</label>
                        <input class="upload__name-input" type="text" name="uploadName" id="fname"
                            placeholder="Add a title to your video" />
                        <div className="upload__text-box upload__text-box--create">
                            <div className="upload__comment upload__comment--create">
                                <div className="upload__comment-input-container">
                                    <label htmlFor="fcomment">ADD A VIDEO DESCRIPTION</label>
                                    <textarea className="upload__comment-input" name="commentText" id="fcomment" cols="5" rows="5" placeholder="Add a description of your video"></textarea>
                                </div>
                                <button className="upload__button" name="commentButton">
                                    PUBLISH
                                </button>
                                <h3 className="upload__cancel">CANCEL</h3>

                            </div>
                        </div>
                    </form>
                </div>
                <div className="upload__post-container">
                    {/* {comments} */}
                </div>
            </div>
        </section>
    )
}
