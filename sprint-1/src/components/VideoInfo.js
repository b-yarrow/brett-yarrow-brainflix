import React from 'react'


export default function VideoInfo(props) {
    const { video, icons } = props;
    // const { likes, views} = icons;
    // const video = props.mainVideo
    console.log(video);
    console.log(icons)
    // const icons = props.icons

    return (
        <div className="videoInfo__container">
            <h1 className="videoInfo__title">{video.title}</h1>
            <div className="videoInfo__firstSubtitle">
                <h2 className="videoInfo__channel">By {video.channel}</h2>
                <h5 className="videoInfo__date">{video.date}</h5>
            </div>
            <div className="videoInfo__secondSubtitle">
                <div className="videoInfo__views-box">
                    <img className="videoInfo__views-icon" src={icons.views}></img>
                    <span className="videoInfo__views-value">{video.views}</span>
                </div>
                <div className="videoInfo__likes-box">
                    <img className="videoInfo__likes-icon" src={icons.likes}></img>
                    <span className="videoInfo__likes-value">{video.likes}</span>
                </div>
            </div>
            <div className="videoInfo__description-box">
                <p className="videoInfo__description-text">{video.description}</p>
            </div>
        </div>
    );
}
