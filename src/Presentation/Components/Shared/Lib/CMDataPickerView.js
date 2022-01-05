import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet, ms} from 'react-native-size-matters';
import DatePicker from 'react-native-date-picker';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import CMLinkButton from '../Buttons/CMLinkButton';
import {strings} from '../../../../Infrastructure/Helper/Utils/i18n';
// #region styles
const styles = ScaledSheet.create({
  vuMain: {
    paddingTop: 10,
    height: '100%',
  },
  vuContain: {
    paddingTop: ms(10),
    backgroundColor: 'white',
    height: '100%',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: ms(12),
    },
    shadowOpacity: 1,
    elevation: 24,
    borderColor: Colors.darkblue,
    borderTopEndRadius: ms(30),
    borderTopStartRadius: ms(30),
    borderWidth: 1,
  },
  vuHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '15@msr',
  },
  vuHide: {
    opacity: 0,
  },
  lblText: {
    alignSelf: 'center',
    fontSize: ms(15),
    marginBottom: ms(15),
    color: Colors.darkblue,
  },
  vuPicker: {
    flex: 1,
    alignSelf: 'center',
    width: ms(230),
  },
  bottomSheetTopLine: {
    backgroundColor: Colors.darkblue,
    height: 0.5,
    width: '100%',
  },
});
// #endregion
const CMDataPickerView = ({
  style,
  type,
  title,
  startDate,
  onChangeDate,
  onDismiss,
}) => {
  return (
    <View style={[styles.vuMain, {...style}]}>
      <View style={styles.vuContain}>
        <View style={styles.vuHeader}>
          <CMLinkButton
            withoutLine
            style={styles.vuHide}
            title={strings('close')}
            onPress={onDismiss}
          />
          <Text style={styles.lblText}>{title}</Text>
          <CMLinkButton
            withoutLine
            color={Colors.pinky}
            style={{marginBottom: ms(9)}}
            title={strings('close')}
            onPress={onDismiss}
          />
        </View>
        <View style={styles.bottomSheetTopLine} />

        <DatePicker
          androidVariant="iosClone"
          style={styles.vuPicker}
          mode={type?.value ?? 'datetime'}
          date={startDate}
          onDateChange={date => {
            onChangeDate(date);
          }}
        />
      </View>
    </View>
  );
};

export default CMDataPickerView;
