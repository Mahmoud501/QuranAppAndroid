import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {ScaledSheet, ms} from 'react-native-size-matters';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import AppConstants from '../../../../Infrastructure/Helper/Utils/AppConstants';

// #region Styles
const styles = ScaledSheet.create({
  vuMain: {},
  lblBack: {
    fontFamily: AppConstants.FONT1_MEDIUM,
    fontSize: '15@msr',
  },
  vuLine: {
    height: 1,
  },
});
// #endregion
const CMLinkButton = ({
  style,
  lblStyle,
  title,
  lineColor,
  color,
  fontSize,
  onPress,
  lineStyle,
  withoutLine,
}) => {
  const getLineHeigth = () => {
    if (fontSize) {
      return ms(fontSize + fontSize / 1.5);
    } else {
      return ms(20);
    }
  };

  return (
    <View style={[styles.vuMain, {...style}]}>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={[
            styles.lblBack,
            {
              color: color ?? Colors.darkRed,
              fontSize: ms(fontSize ?? 16),
              lineHeight: getLineHeigth(),
            },
            {...lblStyle},
          ]}>
          {title ?? 'TITLE HERE'}
        </Text>
        {!withoutLine && (
          <View
            style={[
              styles.vuLine,
              {
                backgroundColor: lineColor
                  ? lineColor
                  : color ?? Colors.darkRed,
              },
              {...lineStyle},
            ]}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CMLinkButton;
