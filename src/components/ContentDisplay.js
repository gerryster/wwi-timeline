require('styles/ContentDisplay.css');

import React, { PropTypes } from 'react';

import _ from 'lodash';

const propTypes = {
  duration: PropTypes.object,
  content: PropTypes.array,
};

const ContentDisplay = ({ duration, content }) => {
  let header = <h2>Select A Week</h2>;
  if(duration) {
    header = <h2>{duration.startDate.format('M/D/YYYY')} to {duration.endDate.format('M/D/YYYY')}</h2>;
  }

  return (
    <div className="content-display">
      {header}
      {_.map(content, (contentItem, index) => {
        return (
          <div key={index}>
            {contentItem.format === 'video' ? renderVideo(contentItem) : renderOther(contentItem)}
          </div>
        )
      })}
    </div>
  );

}

function addNonStandardVideoAttributes(node) {
  // see Dan Abromov's comment in https://github.com/facebook/react/issues/140 :
  if(node) {
    node.setAttribute('frameborder', '0');
    node.setAttribute('allowfullscreen', '');
  }
}

function renderVideo(content) {
  // TODO: figure out how to pass through the custom attributes:
  return (
    <iframe width="560" height="315"
      src={`https://www.youtube.com/embed/${content.videoId}`}
      ref={node => addNonStandardVideoAttributes(node)} />
  );
}

function renderOther(content) {
  return (
    <div>
      {_.map(content, (value, key) => <code key={key}>{key}: {JSON.stringify(value, null, 2)}</code>)}
    </div>
  );
}

ContentDisplay.propTypes = propTypes;

export default ContentDisplay;
