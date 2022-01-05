import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';

// #region Styles
const styles = StyleSheet.create({
  vuMain: {
    flex: 1,
  },
  vuSafeView: {
    flex: 1,
  },
});
// #endregion

const CMMainView = ({children, style, safeViewStyle}) => {
  return (
    <View style={[styles.vuMain, style]}>
      <SafeAreaView style={[styles.vuSafeView, safeViewStyle]}>
        {children}
      </SafeAreaView>
    </View>
  );
};

export default CMMainView;
