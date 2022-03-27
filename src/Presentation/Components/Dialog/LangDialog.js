import React from 'react';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Portal, Dialog} from 'react-native-paper';

import AppConstants from '../../../Infrastructure/Helper/Utils/AppConstants';
import Colors from '../../../Infrastructure/Helper/Utils/Colors';
import {
  strings,
  getCurrentLocale,
} from '../../../Infrastructure/Helper/Utils/i18n';
import CMActionButton from '../../Components/Shared/Buttons/CMActionButton';

// #region Styles
const styles = ScaledSheet.create({
  lblTitle: {
    marginVertical: '10@msr',
    fontFamily: AppConstants.FONT1_SEMIBOLD,
    fontSize: '15@msr',
    textAlign: 'center',
  },
  btn: {
    marginHorizontal: '20@msr',
    marginVertical: '15@msr',
    backgroundColor: Colors.pinky,
  },

  btnCancel: {
    backgroundColor: Colors.transparent,
    color: Colors.darkblue,
    borderWidth: 0.3,
    borderRightColor: Colors.transparent,
    borderLeftColor: Colors.transparent,
    borderRadius: 0,
  },
  btnFontCancel: {
    backgroundColor: Colors.transparent,
    color: Colors.darkblue,
    fontFamily: AppConstants.FONT1_REGULAR,
  },
  vuDialog: {
    backgroundColor: Colors.white,
  },
});
// #endregion

const LangDialog = ({showDialog, onDismiss, onPress}) => {
  return (
    <Portal>
      <Dialog
        style={styles.vuDialog}
        visible={showDialog}
        onDismiss={onDismiss}>
        <View>
          <CMActionButton
            style={getCurrentLocale() === 'ar' ? styles.btn : styles.btnCancel}
            labelStyle={styles.btnFontCancel}
            title={strings('العربية')}
            onPress={() => {
              onPress('ar');
            }}
          />

          <CMActionButton
            style={getCurrentLocale() === 'en' ? styles.btn : styles.btnCancel}
            labelStyle={styles.btnFontCancel}
            title={strings('English')}
            onPress={() => {
              onPress('en');
            }}
          />
          <CMActionButton
            style={getCurrentLocale() === 'es' ? styles.btn : styles.btnCancel}
            labelStyle={styles.btnFontCancel}
            title={strings('Spanish ')}
            onPress={() => {
              onPress('es');
            }}
          />
        </View>
      </Dialog>
    </Portal>
  );
};

export default LangDialog;
