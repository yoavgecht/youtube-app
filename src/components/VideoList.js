import React from 'react';
import VideoListItem from './VideoListItem.js';

const VideoList = (props) => (
    <ul className="col-md-4 list-group">
        {props.videos.map((video, index) => {
            return <VideoListItem key={video.etag} video={video} index={index} onVideoSelect={props.onVideoSelect}/>
        })}
    </ul>
    
);

export default VideoList;