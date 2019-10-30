import React from 'react'
import picBlank from '../assets/images/blank.jpg'
import picUser from '../assets/images/Mohan-muruge.jpg'

const picPath = '../assets/images/'

export default function Comments(props) {
    const comments = props.commentAry.map((comment, index) => {
        return (
            <div key={index} className="comments__post">
                <div className="comments__image-box">
                    <img className="comments__image" src={picBlank}></img>
                </div>
                <div className="comments__text-box">
                    <header className="comments__header">
                        <h2 className="comments__name">{comment.name}</h2>
                        <h5 className="comments__date">{comment.date}</h5>
                    </header>
                    <p className="comments__comment">
                        {comment.comment}
                    </p>
                    {/* <footer className="comments__footer">
                        <div className="comments__like-container">
                            <button className="comments__like">like</button>
                            &nbsp;&#8226;&nbsp;<span className="comments__like-value">###</span>
                        </div>
                        <button className="comments__delete">delete</button>
                    </footer> */}
                </div>
            </div>
        );
    });

    return (
        <section className="comments">
            <h1 className="comments__title">{3} Comments</h1>
            <div className="comments__container">
                <div className="comments__post comments__post--create">

                    <div className="comments__image-box comments__image-box--create">
                        <img name="commentImage" className="comments__image comments__image--create"
                            src={picUser}></img>
                    </div>
                    <form className="comments__name--create" id="commentForm">
                        <div className="comments__text-box comments__text-box--create">
                            <div className="comments__comment comments__comment--create">
                                <label htmlFor="fcomment">JOIN THE CONVERSATION</label>
                                <textarea className="comments__comment-input" name="commentText" id="fcomment" cols="5" rows="5" placeholder="Add a new comment"></textarea>
                                <button className="comments__button" name="commentButton">
                                    COMMENT
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="comments__post-container">
                    {comments}
                </div>
            </div>
        </section>
    )
}
