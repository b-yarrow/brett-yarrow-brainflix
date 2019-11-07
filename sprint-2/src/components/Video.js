import React, { Component } from 'react'

export default class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidUpdate(prevProps) {
        console.log(this.props)
        console.log(prevProps)
        if ((this.props.match.params.videoId !== undefined) && (this.props.match.params.videoId !== prevProps.match.params.videoId)) {
            this.props.updateMainVid(this.props.match.params.videoId);
        }
    }

    render() {
        const video = this.props.video;
        const image = this.props.image;
        const icon = this.props.icons;
        return (
            <div className="video__container">
                <div className="video__player-box">
                    <video className="video__element" poster={image}>
                        <source src={video} type="video/mp4"></source>
                    </video>
                    <div className="video__buttons-box">
                        <div className="video__buttons">
                            <div className="video__play-button">
                                <img src={icon.play} alt="play" />
                            </div>
                            <div className="video__scrubber">
                                <progress className="video__progBar" value={0} max={100}></progress>
                                <span className="video__time">0:00 / 0:42</span>
                            </div>
                            <div className="video__fs-vol">
                                <img src={icon.fullscreen} alt="fullscreen" />
                                <img src={icon.volume} alt="volume" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
