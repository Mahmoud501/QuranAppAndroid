import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import AppConstants from '../../../../Infrastructure/Helper/Utils/AppConstants';
import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import TouchOpactiyIndex from '../../Shared/TouchOpactiy/TouchOpactiyIndex';

// #region Styles
const styles = ScaledSheet.create({
  vuMain: {zIndex: -1},
  vuContent: {
    padding: '12@msr',
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgCheck: {
    width: '18@msr',
    height: '18@msr',
    marginEnd: '10@msr',
  },
  vuContainTitles: {
    flex: 1,
  },
  vuSurha: {
    backgroundColor: Colors.c2,
  },
  lblSurhaName: {
    fontFamily: AppConstants.FONT1_REGULAR,
    fontSize: '14@msr',
    color: Colors.white,
    textAlign: 'center',
  },
  lblAyah: {
    fontFamily: AppConstants.FONT1_MEDIUM,
    fontSize: '14@msr',
    color: Colors.black,
  },
  lblTafseer: {
    fontFamily: AppConstants.FONT1_REGULAR,
    fontSize: '14@msr',
    color: Colors.darkGray,
  },
  vuContainInfo: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  vuNum: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '23@msr',
    height: '23@msr',
    borderRadius: '15@msr',
    backgroundColor: Colors.c4,
  },
  imgStar: {
    width: '20@msr',
    height: '20@msr',
    marginEnd: '20@msr',
  },
  lblNum: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: '12@msr',
  },
  imgMark: {
    position: 'absolute',
    width: '20@msr',
    height: '35@msr',
    left: '12@msr',
    top: '-4@msr',
  },
  vuLine: {
    height: '1@msr',
    backgroundColor: Colors.c5,
    marginHorizontal: '10@msr',
  },
});
// #endregion

const CMAyah = ({style, onPress}) => {
  return (
    <View style={[styles.vuMain, {...style}]}>
      <View style={styles.vuSurha}>
        <Text style={styles.lblSurhaName}>Surah Name</Text>
      </View>
      <View style={styles.vuContent} onPress={onPress}>
        <TouchOpactiyIndex activeOpacity={0.2} onPress={onPress}>
          <Image style={styles.imgCheck} source={AppImages.unchecked} />
        </TouchOpactiyIndex>
        <View style={styles.vuContainTitles}>
          <Text style={styles.lblAyah}>Ayah desc</Text>
          <Text style={styles.lblTafseer}>
            TafseerTafseerTafseerTafseerTafseerTafseerTafseerTafseerTafseerTafseerTafseerTafseerTafseerTafseerTafseer
          </Text>
          <View style={styles.vuContainInfo}>
            <Image style={styles.imgStar} source={AppImages.unselect_star} />
            <View style={styles.vuNum}>
              <Text style={styles.lblNum}>1</Text>
            </View>
          </View>
        </View>
        <Image style={styles.imgMark} source={AppImages.black_mark} />
      </View>
      <View style={styles.vuLine} />
    </View>
  );
};

export default CMAyah;
