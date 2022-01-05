import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import AppConstants from '../../../../Infrastructure/Helper/Utils/AppConstants';

const styles = ScaledSheet.create({
  img: {
    width: '25@msr',
    height: '25@msr',
    resizeMode: 'contain', // or 'stretch'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 0,
    height: '55@msr',
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  input: {
    borderRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    height: '60@msr',
    fontFamily: AppConstants.FONT1_REGULAR,
    fontSize: '15@msr',
    overflow: 'hidden',
    backgroundColor: Colors.transparent,
    marginBottom: '-2@msr',
  },
});

const LineTextField = ({
  style,
  placeholder,
  value,
  onChangeText,
  keyboardType,
  secureTextEntry,
  errormMessage,
  objectPress, // contain icon => image source , onPress => function
  color,
  multiline,
}) => {
  const getWidthStyle = () => {
    if (objectPress) {
      return {width: '88%'};
    }
    return {width: '100%'};
  };

  return (
    <View style={[styles.inputContainer, {...style}]}>
      <TextInput
        underlineColor="transparent"
        multiline={true}
        numberOfLines={multiline ? 0 : 1}
        blurOnSubmit={multiline ? false : true}
        returnKeyType={'done'}
        error={errormMessage}
        label={errormMessage ?? placeholder}
        mode="flat"
        keyboardType={keyboardType ?? 'default'} //email-address //number-pad //phone-pad
        secureTextEntry={secureTextEntry ?? false}
        theme={{
          colors: {primary: color ?? 'red', placeholder: Colors.black},
        }}
        style={[styles.input, getWidthStyle()]}
        value={value}
        onChangeText={onChangeText}
      />
      {objectPress && (
        <TouchableOpacity onPress={objectPress.onPress}>
          <Image style={styles.img} source={objectPress.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default LineTextField;
