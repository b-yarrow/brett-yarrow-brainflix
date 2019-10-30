import React from 'react'

export default function VideoQueue(props) {
    const videos = props.videoList.filter(video => video.title !== 'BMX Rampage: 2018 Highlights').map((video, index) => {
        return (
            <div key={index} className="videoQueue__post">
                <div className="videoQueue__image-box">
                    {/* <img className="videoQueue__image" src={video.preview[Object.getOwnPropertyNames(video.preview)[0]]}></img> */}
                    <img className="videoQueue__image" src={video.image}></img>
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
        );
    })
    return (
        <section className="videoQueue">
            <h5 className="videoQueue__title">NEXT VIDEO</h5>
            <div className="videoQueue__container">
                {videos}
            </div>

        </section>
    )
}
