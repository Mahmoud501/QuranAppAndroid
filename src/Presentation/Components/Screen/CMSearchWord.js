import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import AppConstants from '../../../Infrastructure/Helper/Utils/AppConstants';
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
  vuContainTexts: {},
  lblTitle: {
    fontFamily: AppConstants.FONT1_REGULAR,
    fontSize: '15@msr',
    color: Colors.darkGray,
  },
  vuLine: {
    width: '100%',
    height: '0.5@msr',
    backgroundColor: Colors.c5,
  },
});
// #endregion

const CMSearchWord = ({style, item, onPress}) => {
  return (
    <View style={[styles.vuMain, style]}>
      <TouchOpactiyIndex
        activeOpacity={0.5}
        style={styles.vuBody}
        onPress={onPress}>
        <View style={styles.vuContainTexts}>
          <Text style={styles.lblTitle}>Search Word</Text>
        </View>
      </TouchOpactiyIndex>
      <View style={styles.vuLine} />
    </View>
  );
};

export default CMSearchWord;
