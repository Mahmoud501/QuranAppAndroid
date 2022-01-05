import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Portal, Dialog} from 'react-native-paper';
import CMActionButton from '../../Components/Shared/Buttons/CMActionButton';
import AppConstants from '../../../Infrastructure/Helper/Utils/AppConstants';
import Colors from '../../../Infrastructure/Helper/Utils/Colors';

// #region Styles
const styles = ScaledSheet.create({
  vuDialog: {
    backgroundColor: Colors.white,
    borderRadius: '14@msr',
    borderWidth: 0,
  },
  vuMain: {
    borderRadius: '14@msr',
    borderWidth: 0,
    backgroundColor: Colors.white,
  },
  lblTitle: {
    fontFamily: AppConstants.FONT1_BOLD,
    fontSize: '15@msr',
    textAlign: 'center',
    color: Colors.black,
  },
  lblSubTitle: {
    fontFamily: AppConstants.FONT1_REGULAR,
    fontSize: '13@msr',
    textAlign: 'center',
    color: Colors.darkGray,
  },
  vuText: {
    marginVertical: '20@msr',
  },
  btn: {
    borderColor: Colors.ligthGray2,
    borderWidth: 0,
    borderRadius: 0,
    // borderBottomWidth: 0,
    // borderRightWidth: 0,
    width: '50%',
    backgroundColor: Colors.transparent,
  },

  btnCancel: {
    borderRadius: 0,
    borderColor: Colors.ligthGray2,
    borderWidth: 0,
    // borderBottomWidth: 0,
    // borderRightWidth: 0,
    // borderLeftWidth: 0,
    width: '50%',
    backgroundColor: Colors.transparent,
  },
  btnFontCancel: {
    backgroundColor: Colors.transparent,
    color: Colors.darkGray,
    fontFamily: AppConstants.FONT1_MEDIUM,
  },
  vuContainButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnAcceptStyle: {
    color: Colors.semiblue,
    fontFamily: AppConstants.FONT1_MEDIUM,
  },
});
// #endregion

const GeneralDialog = ({
  showDialog,
  onDismiss,
  onFirst,
  onSecond,
  objectData,
}) => {
  return (
    <Portal>
      <Dialog
        style={styles.vuDialog}
        visible={showDialog}
        onDismiss={onDismiss}>
        <View style={styles.vuMain}>
          <View style={styles.vuText}>
            <Text style={styles.lblTitle}>{objectData?.title}</Text>
            <Text style={styles.lblSubTitle}>{objectData?.subtitle}</Text>
          </View>
          <View style={styles.vuContainButton}>
            {objectData?.btn2Title && (
              <CMActionButton
                style={styles.btnCancel}
                labelStyle={styles.btnFontCancel}
                title={objectData?.btn2Title}
                onPress={onSecond}
              />
            )}
            <CMActionButton
              style={styles.btn}
              labelStyle={styles.btnAcceptStyle}
              title={objectData?.btn1Title}
              onPress={onFirst}
            />
          </View>
        </View>
      </Dialog>
    </Portal>
  );
};

export default GeneralDialog;
