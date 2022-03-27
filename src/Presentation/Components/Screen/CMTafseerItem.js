import React from 'react';
import {View, Image, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import AppConstants from '../../../Infrastructure/Helper/Utils/AppConstants';
import AppImages from '../../../Infrastructure/Helper/Utils/AppImages';
import Colors from '../../../Infrastructure/Helper/Utils/Colors';
import TouchOpactiyIndex from '../Shared/TouchOpactiy/TouchOpactiyIndex';

// #region Styles
const styles = ScaledSheet.create({
  vuMain: {
    flex: 1,
    padding: '10@msr',
  },
  vuBody: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '10@msr',
    marginVertical: '5@msr',
    justifyContent: 'space-between',
  },
  imgReader: {
    width: '80@msr',
    height: '80@msr',
    marginEnd: '15@msr',
    borderTopStartRadius: '8@msr',
    borderBottomStartRadius: '8@msr',
  },
  vuContainTexts: {},
  vuTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lblTitle: {
    fontFamily: AppConstants.FONT1_BOLD,
    fontSize: '15@msr',
    color: Colors.darkGray,
  },
  lblSurhaNum: {
    marginStart: '10@msr',
    fontFamily: AppConstants.FONT1_REGULAR,
    fontSize: '13@msr',
    color: Colors.lightGray,
  },
  lblAyatNum: {
    fontFamily: AppConstants.FONT1_REGULAR,
    fontSize: '14@msr',
    color: Colors.gray,
  },
  vuImage: {
    width: '35@msr',
    height: '35@msr',
    borderRadius: '18@msr',
    backgroundColor: Colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgDownload: {
    width: '18@msr',
    height: '18@msr',
  },
  vuLine: {
    width: '100%',
    height: '0.5@msr',
    backgroundColor: Colors.c5,
  },
});
// #endregion

const CMTafseerItem = ({style, item, onPress}) => {
  return (
    <View style={[styles.vuMain, style]}>
      <TouchOpactiyIndex
        activeOpacity={0.5}
        style={styles.vuBody}
        onPress={onPress}>
        <View style={styles.vuContainTexts}>
          <Text style={styles.lblTitle}>Tafseer Name</Text>
        </View>
        <View>
          <View style={styles.vuImage}>
            <Image style={styles.imgDownload} source={AppImages.download} />
          </View>
        </View>
      </TouchOpactiyIndex>
      <View style={styles.vuLine} />
    </View>
  );
};

export default CMTafseerItem;
