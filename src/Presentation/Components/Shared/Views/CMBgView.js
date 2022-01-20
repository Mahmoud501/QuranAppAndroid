import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';

// #region Styles
const styles = StyleSheet.create({
  vuMain: {
    flex: 1,
  },
});
// #endregion
//Bg = view with background Image
const CMBgView = ({children, style, img, bgColor, heightBottom}) => {
  return (
    <ImageBackground
      source={img ?? AppImages.bg_shapes}
      style={[styles.vuMain, {...style}]}>
      {children}
    </ImageBackground>
  );
};

export default CMBgView;
