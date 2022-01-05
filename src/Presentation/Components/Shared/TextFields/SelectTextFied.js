import React from 'react';
import {Image, View, Platform} from 'react-native';
import {TextInput, ActivityIndicator} from 'react-native-paper';
import {ScaledSheet} from 'react-native-size-matters';

import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import AppConstants from '../../../../Infrastructure/Helper/Utils/AppConstants';
import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
import TouchOpactiyIndex from '../../../../Presentation/Components/Shared/TouchOpactiy/TouchOpactiyIndex';

const styles = ScaledSheet.create({
  img: {
    marginEnd: '10@msr',
    width: '15@msr',
    height: '15@msr',
    resizeMode: 'contain', // or 'stretch'
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 4,
    backgroundColor: Colors.white,
    overflow: 'hidden',
  },
  input: {
    borderRadius: 0,
    borderTopLeftRadius: 0,
    backgroundColor: Colors.transparent,
    fontFamily: AppConstants.FONT1_REGULAR,
    fontSize: '15@msr',
    overflow: 'hidden',
    textAlignVertical: 'top',
    marginBottom: '-2@msr',
  },

  activity: {
    width: '15@msr',
    height: '15@msr',
    marginHorizontal: '15@msr',
  },
});

const SelectTextFied = ({
  style,
  txtStyle,
  placeholder,
  value,
  onPress,
  onChangeText,
  loading,
  errormMessage,
  color,
  icon,
  disable,
}) => {
  const getWidthStyle = () => {
    return {width: '100%'};
  };

  return (
    <View style={[styles.inputContainer, style]}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{flex: 1}}>
          <TouchOpactiyIndex
            onPress={disable ? null : onPress}
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              underlineColor="transparent"
              selectTextOnFocus={false}
              numberOfLines={1}
              multiline={Platform.OS === 'android' ? true : false}
              error={errormMessage}
              label={errormMessage ?? placeholder}
              editable={false}
              mode="flat"
              keyboardType={'default'} //email-address //number-pad //phone-pad
              secureTextEntry={false}
              theme={{
                colors: {
                  text: color ?? 'red',
                  placeholder: color ?? Colors.black,
                  primary: color,
                },
                fonts: {regular: {fontFamily: AppConstants.FONT1_MEDIUM}},
              }}
              style={[styles.input, getWidthStyle(), {...txtStyle}]}
              value={value}
            />
          </TouchOpactiyIndex>
        </View>
        <TouchOpactiyIndex onPress={disable ? null : onPress}>
          <Image style={styles.img} source={icon ?? AppImages.arrow_down} />
        </TouchOpactiyIndex>

        {loading && (
          <ActivityIndicator
            animating={true}
            color={Colors.semiblue}
            style={styles.activity}
          />
        )}
      </View>
    </View>
  );
};

export default SelectTextFied;
