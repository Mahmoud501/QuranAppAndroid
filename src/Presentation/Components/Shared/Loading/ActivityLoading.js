import React from 'react';
// import {StyleSheet} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';

// #region Styles
// const styles = StyleSheet.create({});
// #endregion
const ActivityLoading = ({children, style, color}) => {
  return (
    <ActivityIndicator color={color ?? Colors.darkblue} style={[{...style}]} />
  );
};

export default ActivityLoading;
