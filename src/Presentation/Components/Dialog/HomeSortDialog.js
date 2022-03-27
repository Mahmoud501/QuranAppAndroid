import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Portal, Dialog} from 'react-native-paper';

import AppConstants from '../../../Infrastructure/Helper/Utils/AppConstants';
import Colors from '../../../Infrastructure/Helper/Utils/Colors';
import {strings} from '../../../Infrastructure/Helper/Utils/i18n';
import CMActionButton from '../../Components/Shared/Buttons/CMActionButton';

// #region Styles
const styles = ScaledSheet.create({
  btnCancel: {
    backgroundColor: Colors.transparent,
    borderWidth: 0.3,
    borderRightColor: Colors.transparent,
    borderLeftColor: Colors.transparent,
    borderTopColor: Colors.transparent,
    borderRadius: 0,
  },
  btnFontCancel: {
    backgroundColor: Colors.transparent,
    color: Colors.black,
    fontFamily: AppConstants.FONT1_REGULAR,
  },
  lblTitle: {
    fontFamily: AppConstants.FONT1_REGULAR,
    color: Colors.darkGray,
    fontSize: '15@msr',
    alignItems: 'center',
    padding: '10@msr',
    textAlign: 'center',
  },
});
// #endregion

const HomeSortDialog = ({showDialog, onDismiss, onPress}) => {
  return (
    <Portal>
      <Dialog visible={showDialog} onDismiss={onDismiss}>
        <View>
          <Text style={styles.lblTitle}>{strings('choose_home_option')}</Text>
          <CMActionButton
            style={styles.btnCancel}
            labelStyle={styles.btnFontCancel}
            title={strings('pages')}
            onPress={() => {
              if (onPress) {
                onPress(1);
              }
            }}
          />

          <CMActionButton
            style={styles.btnCancel}
            labelStyle={styles.btnFontCancel}
            title={strings('surhas')}
            onPress={() => {
              if (onPress) {
                onPress(2);
              }
            }}
          />

          <CMActionButton
            style={styles.btnCancel}
            labelStyle={styles.btnFontCancel}
            title={strings('juzhs')}
            onPress={() => {
              if (onPress) {
                onPress(3);
              }
            }}
          />
        </View>
      </Dialog>
    </Portal>
  );
};

export default HomeSortDialog;
