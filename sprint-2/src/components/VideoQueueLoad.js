import React from 'react'
import { Link } from 'react-router-dom'

export default function VideoQueueLoad(props) {
    console.log(props);
    return (
        <section className="videoQueue" onLoad={props.onLoad}>

        </section>
    )
}
