/**
 * @flow
 */

import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import CMActionButton from '../Buttons/CMActionButton';
import {strings} from '../../../../Infrastructure/Helper/Utils/i18n';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import AppConstants from '../../../../Infrastructure/Helper/Utils/AppConstants';

// #region Styles
const styles = ScaledSheet.create({
  vuContain: {
    flex: 1,
    marginHorizontal: '50@msr',
    justifyContent: 'center',
  },
  lblError: {
    marginBottom: '8@msr',
    fontSize: '18@msr',
    fontFamily: AppConstants.FONT1_REGULAR,
    textAlign: 'center',
    color: Colors.black,
    marginTop: '10@msr',
  },
});
// #endregion

// #region Types
type FullPageErrorType = {
  errorMessage?: ?string,
  onRefresh?: ?Function,
  refreshing: boolean,
  textColor?: ?string,
};
// #endregion

export default function FullPageError({
  errorMessage,
  onPress,
  textColor,
  source,
  isHideButton,
}: FullPageErrorType) {
  return (
    <View style={styles.vuContain}>
      {source && <Image style={{alignSelf: 'center'}} source={source} />}
      {errorMessage && (
        <Text style={styles.lblError}>{errorMessage ?? 'dd'}</Text>
      )}
      {!isHideButton && (
        <CMActionButton
          style={{backgroundColor: Colors.darkblue}}
          title={strings('try_again')}
          onPress={onPress}
        />
      )}
    </View>
  );
}

// #region Prop Types
FullPageError.propTypes = {
  errorMessage: PropTypes.string,
  onRefresh: PropTypes.func,
  refreshing: PropTypes.bool,
  textColor: PropTypes.string,
};

FullPageError.defaultProps = {
  errorMessage: null,
  onRefresh: null,
  refreshing: false,
};
// #endregion
