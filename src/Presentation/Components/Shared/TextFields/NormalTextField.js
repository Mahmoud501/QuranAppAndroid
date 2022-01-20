import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {ScaledSheet, ms} from 'react-native-size-matters';
import {TextInput} from 'react-native-paper';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import AppConstants from '../../../../Infrastructure/Helper/Utils/AppConstants';

const styles = ScaledSheet.create({
  img: {
    width: '15@msr',
    height: '15@msr',
    marginEnd: '10@msr',
    resizeMode: 'contain', // or 'stretch'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.transparent,
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
  },
});

const NormalTextField = ({
  style,
  placeholder,
  value,
  onChangeText,
  keyboardType,
  secureTextEntry,
  errormMessage,
  objectPress, // contain icon => image source , onPress => function
  color,
  disable,
  styleText,
  autoFocus,
  styleIcon,
  onSearch,
  multiline,
}) => {
  const [isFocusd, SetIsFocusd] = useState(autoFocus ?? false);
  const getWidthStyle = () => {
    if (objectPress) {
      return {width: '89%'};
    }
    return {width: '100%'};
  };

  return (
    <View
      style={[
        styles.inputContainer,
        style,
        multiline ? {lineHeight: 1, overflow: 'hidden'} : {height: ms(55)},
      ]}>
      {!secureTextEntry && (
        <TextInput
          underlineColor="transparent" // add this
          require={true}
          onSubmitEditing={onSearch}
          autoFocus={autoFocus ?? false}
          editable={!(disable ?? false)}
          error={errormMessage}
          mode="flat"
          multiline={true}
          numberOfLines={multiline ? 0 : 1}
          blurOnSubmit={multiline ? false : true}
          returnKeyType={'done'}
          keyboardType={keyboardType ?? 'default'} //email-address //number-pad //phone-pad
          secureTextEntry={secureTextEntry ?? false}
          label={errormMessage ?? placeholder}
          onFocus={() => {
            SetIsFocusd(true);
          }}
          onBlur={() => {
            SetIsFocusd(false);
          }}
          theme={{
            colors: {
              text: color ? color : Colors.black ?? 'red',
              placeholder: color ? color : Colors.black,
              primary: isFocusd
                ? Colors.transparent
                : color
                ? color
                : Colors.black,
            },
            fonts: {regular: {fontFamily: AppConstants.FONT1_REGULAR}},
          }}
          flat
          style={[
            styles.input,
            getWidthStyle(),
            styleText,
            multiline ? {} : {},
          ]}
          value={value}
          onChangeText={text => {
            if (keyboardType === 'number-pad') {
              let text2 = text
                ?.replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
                  return d.charCodeAt(0) - 1632;
                })
                ?.replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) {
                  return d.charCodeAt(0) - 1776;
                });
              if ((text2 ?? '') === '') {
                onChangeText(text2);
              } else {
                if (
                  Number(text2) &&
                  !text2.includes(' ') &&
                  !text2.includes('.')
                ) {
                  onChangeText(text2);
                } else {
                  onChangeText(value);
                }
              }
            } else {
              onChangeText(text);
            }
          }}
        />
      )}

      {secureTextEntry && (
        <TextInput
          underlineColor="white"
          require={true}
          onSubmitEditing={onSearch}
          autoFocus={autoFocus ?? false}
          editable={!(disable ?? false)}
          error={errormMessage}
          mode="flat"
          numberOfLines={multiline ? 0 : 1}
          blurOnSubmit={multiline ? false : true}
          returnKeyType={'done'}
          keyboardType={keyboardType ?? 'default'} //email-address //number-pad //phone-pad
          secureTextEntry={secureTextEntry ?? false}
          label={errormMessage ?? placeholder}
          onFocus={() => {
            SetIsFocusd(true);
          }}
          onBlur={() => {
            SetIsFocusd(false);
          }}
          theme={{
            colors: {
              text: Colors.black ?? 'red',
              placeholder: Colors.black,
              primary: isFocusd ? Colors.transparent : Colors.black,
            },
            fonts: {regular: {fontFamily: AppConstants.FONT1_REGULAR}},
          }}
          flat
          style={[
            styles.input,
            getWidthStyle(),
            styleText,
            multiline ? {} : {},
          ]}
          value={value}
          onChangeText={onChangeText}
        />
      )}

      {objectPress && (
        <TouchableOpacity onPress={objectPress.onPress}>
          <Image style={[styles.img, styleIcon]} source={objectPress.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default NormalTextField;
