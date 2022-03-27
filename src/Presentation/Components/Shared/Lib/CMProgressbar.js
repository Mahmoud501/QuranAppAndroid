import React from 'react';
import * as Progress from 'react-native-progress';
import {ms} from 'react-native-size-matters';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
const CMProgressbar = ({
  style,
  size,
  type,
  progress,
  thickness,
  showsText,
  unfilledColor,
  animated,
  color,
}) => {
  if (type === 0 || type === null || type === undefined) {
    if (animated) {
      return (
        <Progress.CircleSnail
          animating
          style={style}
          color={color ?? Colors.gray}
          thickness={thickness ?? 2}
          size={ms(size ?? 40)}
        />
      );
    } else {
    }
    return (
      <Progress.Circle
        allowFontScaling
        style={style}
        progress={progress}
        unfilledColor={unfilledColor ?? Colors.lightGray}
        color={color ?? Colors.blue}
        borderWidth={0}
        showsText={showsText}
        thickness={thickness ?? 2}
        size={ms(size ?? 40)}
      />
    );
  } else {
    return (
      <Progress.Bar
        style={style}
        width={null}
        animated
        unfilledColor={unfilledColor ?? Colors.whisper}
        color={color ?? Colors.custom_orange}
        borderWidth={0}
        thickness={thickness ?? 8}
        progress={progress}
      />
    );
  }
};

export default CMProgressbar;
