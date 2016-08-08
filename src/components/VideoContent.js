import React, { PropTypes } from 'react';

const propTypes = {
  content: PropTypes.object,
};

const VideoContent = ({ content }) => {
  return (
    <iframe className="video-content" width="560" height="315"
      src={`https://www.youtube.com/embed/${content.videoId}`}
      ref={node => addNonStandardVideoAttributes(node)} />
  );
}

function addNonStandardVideoAttributes(node) {
  // see Dan Abromov's comment in https://github.com/facebook/react/issues/140 :
  if(node) {
    node.setAttribute('frameborder', '0');
    node.setAttribute('allowfullscreen', '');
  }
}

VideoContent.propTypes = propTypes;

export default VideoContent;
