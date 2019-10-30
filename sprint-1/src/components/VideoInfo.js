import React from 'react'
import viewsIcon from '../assets/images/icons/SVG/Icon-views.svg'
import likesIcon from '../assets/images/icons/SVG/Icon-likes.svg'

export default function VideoInfo(props) {
    // const data = props.videoList[0].map(dat => {
    //     console.log(dat);
    // })

    const video = props.videoList;
    var vid = {
        title: "BMX Rampage: 2018 Highlights",
        creator: "Red Cow",
        date: "12/18/2018",
        views: "1,001,023",
        likes: "110,985",
        description: "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his ﬁrst Red Cow Rampage title"
    }


    return (
        <div className="videoInfo__container">
            <h1 className="videoInfo__title">{video.title}</h1>
            <div className="videoInfo__firstSubtitle">
                <h2 className="videoInfo__creator">By {video.creator}</h2>
                <h5 className="videoInfo__date">{video.date}</h5>
            </div>
            <div className="videoInfo__secondSubtitle">
                <div className="videoInfo__views-box">
                    <img className="videoInfo__views-icon" src={viewsIcon}></img>
                    <span className="videoInfo__views-value">{vid.views}</span>
                </div>
                <div className="videoInfo__likes-box">
                    <img className="videoInfo__likes-icon" src={likesIcon}></img>
                    <span className="videoInfo__likes-value">{vid.likes}</span>
                </div>
            </div>
            <div className="videoInfo__description-box">
                <p className="videoInfo__description-text">{vid.description}</p>
            </div>
        </div>
    );
}
