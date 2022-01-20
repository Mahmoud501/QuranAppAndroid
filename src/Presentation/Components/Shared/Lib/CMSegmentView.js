import React from 'react';
import {ms} from 'react-native-size-matters';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import AppConstants from '../../../../Infrastructure/Helper/Utils/AppConstants';

// #region Styles
// const styles = StyleSheet.create({});
// #endregion
//Bg = view with background Image
const CMSegmentView = ({
  onChange,
  selectedIndex,
  data,
  styleObj,
  styleTab,
  styleFont,
  styleActiveFont,
  isEnable,
}) => {
  return (
    <SegmentedControl
      appearance="light"
      fontStyle={
        styleFont ?? {
          color: Colors.darkblue,
          fontFamily: AppConstants.FONT1_REGULAR,
          fontSize: ms(15),
        }
      }
      activeFontStyle={
        styleActiveFont ?? {
          color: Colors.darkblue,
          fontFamily: AppConstants.FONT1_REGULAR,
          fontSize: ms(15),
        }
      }
      tintColor="white"
      enabled={isEnable ?? true}
      style={styleObj}
      values={data ?? []}
      selectedIndex={selectedIndex ?? 0}
      onChange={event => {
        if (onChange) {
          onChange(event.nativeEvent.selectedSegmentIndex);
        }
      }}
    />
  );
};

export default CMSegmentView;
