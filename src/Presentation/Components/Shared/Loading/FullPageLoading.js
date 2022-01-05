/**
 * @flow
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import PropTypes from 'prop-types';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';

// #region Styles
const styles = StyleSheet.create({
  loading: {
    width: '100%',
    height: '100%',
  },
});
// #endregion

// #region Types
type FullPageLoadingType = {
  show: boolean,
};
// #endregion

export default function FullPageLoading({show}: FullPageLoadingType) {
  if (show) {
    return (
      <ActivityIndicator
        color={Colors.darkblue}
        size="large"
        style={styles.loading}
      />
    );
  }

  return null;
}

// #region Prop Types
FullPageLoading.propTypes = {
  show: PropTypes.bool.isRequired,
};
// #endregion
