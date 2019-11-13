import React from 'react'
import { Link } from 'react-router-dom'

export default function VideoQueue(props) {
    const videos = props.videoList.filter(video => video.id !== props.current).map((video, index) => {

        return (
            <Link key={index} to={`/video/${video.id}`}>
                <div className="videoQueue__post">
                    <div className="videoQueue__image-box">
                        <img className="videoQueue__image" src={video.image} alt="preview"></img>
                    </div>
                    <div className="videoQueue__text-box">
                        <header className="videoQueue__header">
                            <div className="videoQueue__line-clamp">
                                <h2 className="videoQueue__title">{video.title}</h2>
                            </div>
                            <h5 className="videoQueue__channel">{video.channel}</h5>
                        </header>
                    </div>
                </div>
            </Link>
        );
    })
    return (
        <section className="videoQueue">
            <h5 className="videoQueue__heading">NEXT VIDEO</h5>
            <div className="videoQueue__container">
                {videos}
            </div>

        </section>
    )
}
