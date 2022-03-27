import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Portal, Dialog} from 'react-native-paper';

import AppConstants from '../../../Infrastructure/Helper/Utils/AppConstants';
import Colors from '../../../Infrastructure/Helper/Utils/Colors';
import {strings} from '../../../Infrastructure/Helper/Utils/i18n';
import CMActionButton from '../Shared/Buttons/CMActionButton';

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
  vuWriteTest: {
    marginHorizontal: '15@msr',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vuLine: {
    height: '0.5@msr',
    backgroundColor: Colors.lightGray,
  },
});
// #endregion

const TestDialog = ({showDialog, onDismiss, onPress}) => {
  return (
    <Portal>
      <Dialog visible={showDialog} onDismiss={onDismiss}>
        <View>
          <Text style={styles.lblTitle}>{strings('test_title')}</Text>
          <View style={styles.vuWriteTest}>
            <CMActionButton
              style={[
                styles.btnCancel,
                {
                  borderBottomColor: Colors.transparent,
                },
              ]}
              labelStyle={[styles.btnFontCancel, {color: Colors.black}]}
              title={strings('write_test')}
              onPress={() => {
                if (onPress) {
                  onPress(1);
                }
              }}
            />
            <CMActionButton
              style={[
                styles.btnCancel,
                {
                  borderBottomColor: Colors.transparent,
                },
              ]}
              labelStyle={[styles.btnFontCancel, {color: Colors.red}]}
              title={strings('clear_write_test')}
              onPress={() => {
                if (onPress) {
                  onPress(2);
                }
              }}
            />
          </View>
          <View style={styles.vuLine} />
          <CMActionButton
            style={styles.btnCancel}
            labelStyle={[styles.btnFontCancel, {color: Colors.black}]}
            title={strings('sound_record_test')}
            onPress={() => {
              if (onPress) {
                onPress(3);
              }
            }}
          />

          <CMActionButton
            style={styles.btnCancel}
            labelStyle={[styles.btnFontCancel, {color: Colors.black}]}
            title={strings('sort_test')}
            onPress={() => {
              if (onPress) {
                onPress(4);
              }
            }}
          />

          <CMActionButton
            style={styles.btnCancel}
            labelStyle={[styles.btnFontCancel, {color: Colors.black}]}
            title={strings('complete_test')}
            onPress={() => {
              if (onPress) {
                onPress(5);
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

export default TestDialog;
