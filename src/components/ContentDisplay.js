require('styles/ContentDisplay.css');
import VideoContent from './VideoContent';

import _ from 'lodash';
import React, { PropTypes } from 'react';

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
            {contentItem.format === 'video' ? <VideoContent content={contentItem}/>
                : renderOther(contentItem)}
          </div>
        )
      })}
    </div>
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
