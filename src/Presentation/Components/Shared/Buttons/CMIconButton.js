import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {Image, View} from 'react-native';
import TouchOpactiyIndex from '../TouchOpactiy/TouchOpactiyIndex';

// #region Styles
const styles = ScaledSheet.create({
  vuMain: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  imgIcon: {
    width: '35@msr',
    height: '35@msr',
  },
});
// #endregion

const CMIconButton = ({source, style, styleIcon, onPress}) => {
  return (
    <View style={[styles.vuMain, {...style}]}>
      <TouchOpactiyIndex activeOpacity={0.5} onPress={onPress}>
        <Image style={[styles.imgIcon, {...styleIcon}]} source={source} />
      </TouchOpactiyIndex>
    </View>
  );
};

export default CMIconButton;
