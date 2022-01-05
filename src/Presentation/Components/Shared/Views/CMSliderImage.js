import React from 'react';
import {View, Image, Dimensions, useWindowDimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';

// #region Styles
const styles = ScaledSheet.create({
  vuMain: {
    width: Dimensions.get('window').width,
    height: '100%',
    flexDirection: 'row',
  },
  imgBack: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
});
// #endregion

const CMSliderImage = ({source}) => {
  return (
    <View style={[styles.vuMain, {width: useWindowDimensions().width}]}>
      <Image style={styles.imgBack} source={source ?? AppImages.logo} />
    </View>
  );
};

export default CMSliderImage;
