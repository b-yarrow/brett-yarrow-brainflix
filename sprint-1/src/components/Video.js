import React from 'react'


export default function Video(props) {
    const video = props.video;
    const image = props.image;
    const icon = props.icons;

    return (
        <div className="video__container">
            <div className="video__player-box">
                <video className="video__element" poster={image}>
                    <source src={video} type="video/mp4"></source>
                </video>
                <div className="video__buttons-box">
                    <div className="video__buttons">
                        <div className="video__play-button">
                            <img src={icon.play} />
                        </div>
                        <div className="video__scrubber">
                            <progress className="video__progBar" value={0} max={100}></progress>
                            <span className="video__time">0:00 / 0:42</span>
                        </div>
                        <div className="video__fs-vol">
                            <img src={icon.fullscreen} />
                            <img src={icon.volume} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
