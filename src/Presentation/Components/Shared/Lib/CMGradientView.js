import React from 'react';
import {Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';

// #region Styles
const styles = ScaledSheet.create({
  vuMain: {},
});
// #endregion
//Bg = view with background Image
const CMGradientView = ({children, style, colors, start, end}) => {
  return (
    <LinearGradient
      start={start ?? {x: 0, y: 0}}
      end={end ?? {x: 1, y: 1}}
      colors={colors ?? [Colors.c1, Colors.c2]}
      style={[styles.vuMain, {...style}]}>
      {children}
    </LinearGradient>
  );
};

export default CMGradientView;
