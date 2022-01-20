import React from 'react';
import {View, Image, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import AppConstants from '../../../Infrastructure/Helper/Utils/AppConstants';
import Colors from '../../../Infrastructure/Helper/Utils/Colors';

// #region Styles
const styles = ScaledSheet.create({
  vuMain: {
    flex: 1,
    margin: '12@msr',
  },
  imgSlider: {
    resizeMode: 'contain',
    width: '85%',
    height: '45%',
    alignSelf: 'center',
  },
  lblTitle: {
    fontFamily: AppConstants.FONT1_BOLD,
    fontSize: '28@msr',
    color: Colors.c4,
  },
  lblSubTitle: {
    fontFamily: AppConstants.FONT1_REGULAR,
    fontSize: '16@msr',
    color: Colors.c2,
  },
});
// #endregion

const IntroSliderItem = ({style, item}) => {
  return (
    <View style={[styles.vuMain, style]}>
      <Image style={styles.imgSlider} source={item?.img} />
      <Text style={styles.lblTitle}>{item?.title}</Text>
      <Text style={styles.lblSubTitle}>{item?.desc}</Text>
    </View>
  );
};

export default IntroSliderItem;
