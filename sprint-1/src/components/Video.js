import React from 'react'
import vidPoster from '../assets/images/video-list-0.jpg'
import vidFile from '../assets/video/brainStationSampleVideo.mp4';
import playButton from '../assets/images/icons/SVG/icon-play.svg'
import fullscreen from '../assets/images/icons/SVG/Icon-fullscreen.svg'
import volume from '../assets/images/icons/SVG/Icon-volume.svg'

export default function Video() {
    return (
        <div className="video__container">
            <div className="video__player-box">
                <video width="320" height="183" poster={vidPoster}>
                    <source src={vidFile} type="video/mp4"></source>
                </video>
                <div className="video__buttons-box">
                    <div className="video__buttons">
                        <div className="video__play-button">
                            <img src={playButton} />
                        </div>
                        <div className="video__scrubber">
                            <progress className="video__progBar" value={0} max={100}></progress>
                        </div>
                        <div className="video__fs-vol">
                            <img src={fullscreen} />
                            <img src={volume} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
