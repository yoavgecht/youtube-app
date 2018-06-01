import React from 'react';

const VideoListItem = (props) => {
    console.log('props', props)
    return (
    <li className="list-group-item" onClick={props.onVideoSelect.bind(this, props.video)}>
        <div className="video-list media">
            <div className="media-left">
                <img src={props.video.snippet.thumbnails.default.url} className="media-object video-item img" alt="" />
            </div>
            <div className="media=body">
                <div className="media-heading">{props.video.snippet.title}</div>
            </div>
        </div>
    </li>  
    )  
};

export default VideoListItem;