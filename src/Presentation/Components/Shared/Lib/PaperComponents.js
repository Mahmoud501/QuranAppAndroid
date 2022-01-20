import React from 'react';
import {ProgressBar} from 'react-native-paper';

export const RPaperProgressBar = props => {
  return (
    <ProgressBar
      progress={props.progress}
      color={props.color}
      style={props.style}
    />
  );
};
