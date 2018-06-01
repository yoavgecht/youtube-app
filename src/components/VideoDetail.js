import React from 'react';

const VideoDetail = (props) => {
    if (!props.video) return <div>Loading....</div>;
    const videoId = props.selectVideo.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} className="embed-responsive-item"></iframe>
            </div>
            <div className="video-detail details">
                <div>{props.video.snippet.title}</div>
                <div>{props.video.snippet.description}</div>
            </div>
        </div>
    )
};

export default VideoDetail;