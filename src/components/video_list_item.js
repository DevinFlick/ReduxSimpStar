import * as React from 'react';

//rather than pass props down, ({videos}) is passed,
// this destructures the argument and pulls off the
// video property from props and passes that in
//you can destructure further by including multiple properties from an argument
// being passed in
const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className='list-group-item'>
      <div className='video-list media'>
        <div className='media-left'>
          <img className='media-object' src={imageUrl}/>
        </div>

        <div className='media-body'>
          <div className='media-heading'>{video.snippet.title}</div>
        </div>
      </div>
    </li>
)
};

export default VideoListItem;
