import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';

// #region Styles
const styles = StyleSheet.create({
  vuMain: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  vuBottom: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: '#EDEDF5',
  },
});
// #endregion
//Bg = view with background Image
const CMBgView = ({children, style, img, bgColor, heightBottom}) => {
  return (
    <ImageBackground
      source={img ?? AppImages.bg_logo}
      style={[styles.vuMain, {...style}]}>
      <View
        style={[
          styles.vuBottom,
          {backgroundColor: bgColor ?? Colors.whisper},
          {height: heightBottom ?? '30%'},
        ]}
      />
      {children}
    </ImageBackground>
  );
};

export default CMBgView;
