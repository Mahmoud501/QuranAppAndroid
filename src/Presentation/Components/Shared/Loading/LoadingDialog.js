/**
 * @flow
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Portal, ActivityIndicator} from 'react-native-paper';
import PropTypes from 'prop-types';

import Colors from '../../../../Infrastructure/Helper/Utils/Colors';

// #region Types
type LoadingDialogType = {
  animating: boolean,
};
// #endregion

// #region Styles
const Styles = StyleSheet.create({
  portal: {
    width: '100%',
    height: '100%',
    backgroundColor: `${Colors.black}70`,
    opacity: 0.5,
  },
  closingProgress: {
    width: '100%',
    height: '100%',
  },
});
// #endregion

export default function LoadingDialog({animating}: LoadingDialogType) {
  if (animating) {
    return (
      <Portal>
        <View style={Styles.portal}>
          <ActivityIndicator
            animating={animating}
            color={Colors.darkblue}
            size="large"
            style={Styles.closingProgress}
          />
        </View>
      </Portal>
    );
  }

  return null;
}

// #region Prop Types
LoadingDialog.propTypes = {
  animating: PropTypes.bool,
};

LoadingDialog.defaultProps = {
  animating: false,
};
// #endregion
