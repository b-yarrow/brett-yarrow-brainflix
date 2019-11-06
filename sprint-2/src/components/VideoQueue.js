import React from 'react'
import { Link } from 'react-router-dom'

export default function VideoQueue(props) {
    // console.log(props);
    // var update = props.onLoad;
    const videos = props.videoList.filter(video => video.id !== props.current).map((video, index) => {

        return (
            <Link to={`/video/${video.id}`}>
                <div key={index} className="videoQueue__post">
                    <div className="videoQueue__image-box">
                        {/* <img className="videoQueue__image" src={video.preview[Object.getOwnPropertyNames(video.preview)[0]]}></img> */}
                        <img className="videoQueue__image" src={video.image} alt="preview"></img>
                    </div>
                    <div className="videoQueue__text-box">
                        <header className="videoQueue__header">
                            <h2 className="videoQueue__name">{video.title}</h2>
                            <h5 className="videoQueue__date">{video.channel}</h5>
                        </header>
                        {/* <footer className="videoQueue__footer">
                        <div className="videoQueue__like-container">
                            <button className="videoQueue__like">like</button>
                            &nbsp;&#8226;&nbsp;<span className="videoQueue__like-value">###</span>
                        </div>
                        <button className="videoQueue__delete">delete</button>
                    </footer> */}
                    </div>
                </div>
            </Link>
        );
    })
    console.log(videos);
    return (
        <section className="videoQueue">
            <h5 className="videoQueue__title">NEXT VIDEO</h5>
            <div className="videoQueue__container">
                {videos}
            </div>

        </section>
    )
}
