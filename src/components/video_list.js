import React from "react";

const VideoList = (props) => {
    // In function-based component, we can pass props as an argument and can access it as a parameter
    // But in class-based, we can pass it as as an argument , we access it as this.props
    return (
        // We are using bootstrap styling
        // We use className instead of class in jsx to avoid conflict with the class keyword
        // "col-md-4" in bootstrap is we get a 4 unit column on desktop sized screen (md)
        // "list-group" in bootstrap is for for displaying a series of content
        <ul className="col-md-4 list-group">
            {
                props.videos.length
            }
        </ul>
    )
}

export default VideoList
