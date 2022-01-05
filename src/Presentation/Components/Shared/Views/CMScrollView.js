import React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
// #region Styles
const styles = StyleSheet.create({
  vuMain: {
    flex: 1,
  },
});
// #endregion
//Bg = view with background Image
const CMScrollView = ({children, style, img, bounces}) => {
  return (
    <ScrollView
      bounces={bounces}
      showsVerticalScrollIndicator={false}
      style={[styles.vuMain, {...style}]}>
      {children}
    </ScrollView>
  );
};

export default CMScrollView;
