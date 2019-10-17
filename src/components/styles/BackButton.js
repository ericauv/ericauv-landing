import React from 'react';
import Button from './Button';
export default props => (
  <Button
    title="Go back"
    className="back"
    onClick={() => window.history.back()}
    scale={props.scale ? props.scale : 1}
    style={props.style ? { ...props.style } : { alignSelf: 'flex-start' }}
  >
    {'< Back'}
  </Button>
);
