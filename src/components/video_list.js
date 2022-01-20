import React from "react"
import VideoListItem from "./video_list_item"

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoListItem 
            onVideoSelect={props.onVideoSelect}
            video={video} 
            key={video.etag}/>
    })
    // In function-based component, we can pass props as an argument and can access it as a parameter
    // But in class-based, we can pass it as as an argument , we access it as this.props
    return (
        // We are using bootstrap styling
        // We use className instead of class in jsx to avoid conflict with the class keyword
        // "col-md-4" in bootstrap is we get a 4 unit column on desktop sized screen (md)
        // "list-group" in bootstrap is for for displaying a series of content
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
}

export default VideoList
