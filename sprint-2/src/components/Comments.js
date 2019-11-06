import React from 'react'

export default function Comments(props) {
    if (props.comments === undefined) {
        return (<p>loading...</p>)
    }

    function dayFormat(dayMilli) {
        let dayArray = [];
        let day = new Date(dayMilli);

        // dayArray.push((day.getMonth() + 1) < 10 ? '0' + (day.getMonth() + 1) : (day.getMonth() + 1));
        dayArray.push((day.getMonth() + 1));
        dayArray.push(day.getDate());
        dayArray.push(day.getFullYear());

        return dayArray.join('/');
    }

    const comments = props.comments.map((comment, index) => {
        return (
            <div key={index} className="comments__post">
                <div className="comments__image-box">
                    <img className="comments__image" src={props.picBlank} alt="avatar"></img>
                </div>
                <div className="comments__text-box">
                    <header className="comments__header">
                        <h2 className="comments__name">{comment.name}</h2>
                        <h5 className="comments__date">{dayFormat(comment.timestamp)}</h5>
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
            <h1 className="comments__title">{comments.length} Comments</h1>
            <div className="comments__container">
                <div className="comments__post comments__post--create">

                    <div className="comments__image-box comments__image-box--create">
                        <img name="commentImage" className="comments__image comments__image--create"
                            src={props.profPic} alt="profile-avatar"></img>
                    </div>
                    <form className="comments__name--create" id="commentForm">
                        <div className="comments__text-box comments__text-box--create">
                            <div className="comments__comment comments__comment--create">
                                <div className="comments__comment-input-container">
                                    <label htmlFor="fcomment">JOIN THE CONVERSATION</label>
                                    <textarea className="comments__comment-input" name="commentText" id="fcomment" cols="5" rows="5" placeholder="Add a new comment"></textarea>
                                </div>
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
