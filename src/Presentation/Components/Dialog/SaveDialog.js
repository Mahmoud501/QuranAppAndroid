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

const SaveDialog = ({showDialog, onDismiss, onPress}) => {
  return (
    <Portal>
      <Dialog visible={showDialog} onDismiss={onDismiss}>
        <View>
          <Text style={styles.lblTitle}>{strings('memory_ayat?')}</Text>
          <CMActionButton
            style={styles.btnCancel}
            labelStyle={[styles.btnFontCancel, {color: Colors.c4}]}
            title={strings('yes_saved')}
            onPress={() => {
              if (onPress) {
                onPress(1);
              }
            }}
          />

          <CMActionButton
            style={styles.btnCancel}
            labelStyle={[styles.btnFontCancel, {color: Colors.red}]}
            title={strings('not_saved_yet')}
            onPress={() => {
              if (onPress) {
                onPress(2);
              }
            }}
          />

          <CMActionButton
            style={styles.btnCancel}
            labelStyle={styles.btnFontCancel}
            title={strings('cancel')}
            onPress={onDismiss}
          />
        </View>
      </Dialog>
    </Portal>
  );
};

export default SaveDialog;
