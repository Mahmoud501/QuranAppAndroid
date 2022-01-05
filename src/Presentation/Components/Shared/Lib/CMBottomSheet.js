import React from 'react';
import {View} from 'react-native';
import {ScaledSheet, ms} from 'react-native-size-matters';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import BottomSheet from 'reanimated-bottom-sheet';

// #region Styles
// eslint-disable-next-line no-unused-vars
const styles = ScaledSheet.create({
  vuMain: {
    backgroundColor: 'white',
  },
});
// #endregion
//Bg = view with background Image
const CMBottomSheet = ({children, style, show, onDismiss}) => {
  if (show) {
    return (
      <BottomSheet
        snapPoints={[ms(300), 0]}
        initialSnap={0}
        renderContent={() => {
          return <View style={[styles.vuMain, {...style}]}>{children}</View>;
        }}
        enabledBottomInitialAnimation
        onCloseEnd={onDismiss}
        onOpenEnd={() => {}}
      />
    );
  }
  return null;
};

export default CMBottomSheet;
