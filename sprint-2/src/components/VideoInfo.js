import React from 'react'


export default function VideoInfo(props) {
    const { video, icons } = props;
    // const { likes, views} = icons;
    // const video = props.mainVideo
    // const icons = props.icons

    const dayFormat = (dayMilli) => {
        let dayArray = [];
        let day = new Date(dayMilli);

        // dayArray.push((day.getMonth() + 1) < 10 ? '0' + (day.getMonth() + 1) : (day.getMonth() + 1));
        dayArray.push((day.getMonth() + 1));
        dayArray.push(day.getDate());
        dayArray.push(day.getFullYear());

        return dayArray.join('/');
    }

    return (
        <div className="videoInfo__container">
            <h1 className="videoInfo__title">{video.title}</h1>
            <div className="videoInfo__subtitle-box">
                <div className="videoInfo__firstSubtitle">
                    <h2 className="videoInfo__channel">By {video.channel}</h2>
                    <h5 className="videoInfo__date">{dayFormat(video.timestamp)}</h5>
                </div>

                <div className="videoInfo__secondSubtitle">
                    <div className="videoInfo__views-box">
                        <img className="videoInfo__views-icon" src={icons.views} alt="views"></img>
                        <span className="videoInfo__views-value">{video.views}</span>
                    </div>
                    <div className="videoInfo__likes-box">
                        <img className="videoInfo__likes-icon" src={icons.likes} alt="likes"></img>
                        <span className="videoInfo__likes-value">{video.likes}</span>
                    </div>
                </div>
            </div>
            <div className="videoInfo__description-box">
                <p className="videoInfo__description-text">{video.description}</p>
            </div>
        </div>
    );
}
