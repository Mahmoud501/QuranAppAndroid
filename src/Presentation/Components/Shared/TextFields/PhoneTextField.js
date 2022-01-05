import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {ActivityIndicator} from 'react-native-paper';
import {TextInput} from 'react-native-paper';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
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
    borderRadius: 4,
    backgroundColor: Colors.white,
    overflow: 'hidden',
  },
  input: {
    borderRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: Colors.transparent,
    overflow: 'hidden',
    fontFamily: AppConstants.FONT1_REGULAR,
    fontSize: '15@msr',
    marginBottom: '-2@msr',
  },
  lblCodeShow: {
    fontFamily: AppConstants.FONT1_REGULAR,
    fontSize: '15@msr',
  },

  vuCotainCountry: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '8@msr',
  },

  imgDownArrow: {
    marginStart: '7@msr',
    width: '10@msr',
    height: '10@msr',
  },

  vuContainFlag: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  vuVerticalLine: {
    backgroundColor: Colors.gray,
    width: '0.8@msr',
    height: '25@msr',
    marginHorizontal: '7@msr',
  },

  activity: {
    width: '15@msr',
    height: '15@msr',
    marginHorizontal: '10@msr',
  },
});

const PhoneTextField = ({
  style,
  placeholder,
  value,
  onChangeText,
  onPressCountry,
  loading,
  errormMessage,
  country, // contain icon => image source , onPress => function
  color,
  disable,
}) => {
  const getWidthStyle = () => {
    if (country) {
      return {width: '88%'};
    }
    return {width: '100%'};
  };

  return (
    <View style={[styles.inputContainer, {...style}]}>
      <View style={styles.vuCotainCountry}>
        {loading && (
          <ActivityIndicator
            animating={true}
            color={Colors.semiblue}
            style={styles.activity}
          />
        )}

        <TouchableOpacity
          style={styles.vuContainFlag}
          onPress={onPressCountry ?? null}>
          <Image
            style={styles.img}
            source={country?.flag ? {uri: country?.flag} : AppImages.logo}
          />
          <Image style={styles.imgDownArrow} source={AppImages.arrow_down} />
        </TouchableOpacity>
        <View style={styles.vuVerticalLine} />
        <Text style={styles.lblCodeShow}>{country?.code ?? '00'}</Text>
      </View>

      <TextInput
        underlineColor="transparent"
        require={true}
        multiline={true}
        numberOfLines={1}
        blurOnSubmit={true}
        returnKeyType={'done'}
        editable={!(disable ?? false)}
        error={errormMessage}
        mode="flat"
        keyboardType="phone-pad" //email-address //number-pad //phone-pad
        label={errormMessage ?? placeholder}
        theme={{
          colors: {
            text: color ?? 'red',
            placeholder: Colors.black,
            primary: color,
          },
          fonts: {regular: {fontFamily: AppConstants.FONT1_REGULAR}},
        }}
        style={[styles.input, getWidthStyle()]}
        value={value
          ?.replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
            return d.charCodeAt(0) - 1632;
          })
          ?.replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) {
            return d.charCodeAt(0) - 1776;
          })}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default PhoneTextField;
