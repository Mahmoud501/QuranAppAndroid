import React from 'react';
import {Image, View, Platform, ScrollView, Text} from 'react-native';
import {TextInput, ActivityIndicator} from 'react-native-paper';
import {ScaledSheet, ms} from 'react-native-size-matters';

import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import AppConstants from '../../../../Infrastructure/Helper/Utils/AppConstants';
import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
import TouchOpactiyIndex from '../../../../Presentation/Components/Shared/TouchOpactiy/TouchOpactiyIndex';
import {Menu, Divider} from 'react-native-paper';

const styles = ScaledSheet.create({
  img: {
    marginEnd: '15@msr',
    width: '15@msr',
    height: '15@msr',
    resizeMode: 'contain', // or 'stretch'
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '4@msr',
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
  lblDropTitle: {
    fontFamily: AppConstants.FONT1_MEDIUM,
    fontSize: '15@msr',
    color: Colors.black,
    paddingVertical: '10@msr',
    paddingHorizontal: '15@msr',
    textAlign: 'left',
  },
  activity: {
    width: '15@msr',
    height: '15@msr',
    marginHorizontal: '15@msr',
  },
  vuLine: {
    width: '100%',
    height: '0.5@msr',
    backgroundColor: Colors.lightGray,
  },
});

const DropDownTextField = ({
  data,
  style,
  txtStyle,
  placeholder,
  value,
  onPress,
  loading,
  errormMessage,
  color,
  icon,
  disable,
  onSelectItem,
  widthMenuStyle,
}) => {
  const [isFocusd, SetIsFocusd] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  // const [selectItem, SetSelectItem] = React.useState(value);

  //
  const getWidthStyle = () => {
    return {width: '100%'};
  };

  const CustomMenuItem = (item, isLast, onPress2) => {
    return (
      <TouchOpactiyIndex
        key={item?.id}
        style={{
          backgroundColor:
            item?.id === value?.id ? Colors.red : Colors.transparent,
        }}
        onPress={onPress2}>
        <Text style={styles.lblDropTitle}>{item?.title}</Text>
        {!isLast && <View style={styles.vuLine} />}
      </TouchOpactiyIndex>
    );
  };

  const getMenuItems = () => {
    return data?.map((item, index) => {
      return CustomMenuItem(item, index == (data?.length ?? 0) - 1, () => {
        // SetSelectItem(item);
        setVisible(false);
        if (onSelectItem) {
          onSelectItem(item);
        }
      });
    });
  };
  //

  const menu = widthStyle2 => {
    return (
      <Menu
        style={[
          {
            marginTop: Platform.OS === 'ios' ? ms(50) : ms(100),
            width: '92%',
            height: ms(200),
          },
          widthStyle2,
        ]}
        visible={visible}
        onDismiss={() => {
          setVisible(false);
        }}
        anchor={textField()}>
        <ScrollView style={{marginVertical: -10, backgroundColor: 'white'}}>
          {getMenuItems()}
        </ScrollView>
      </Menu>
    );
  };

  const textField = () => {
    return (
      <View style={[styles.inputContainer, {...style}]}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flex: 1}}>
            <TouchOpactiyIndex
              onPress={
                disable
                  ? null
                  : () => {
                      if (data) {
                        setVisible(true);
                      } else {
                        if (onPress) {
                          onPress();
                        }
                      }
                    }
              }
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TextInput
                selectTextOnFocus={false}
                numberOfLines={1}
                multiline={Platform.OS === 'android' ? true : false}
                error={errormMessage}
                value={value?.id == 0 ? '' : value?.title}
                label={errormMessage ?? placeholder}
                editable={false}
                mode="flat"
                keyboardType={'default'} //email-address //number-pad //phone-pad
                secureTextEntry={false}
                onFocus={() => {
                  SetIsFocusd(true);
                }}
                onBlur={() => {
                  SetIsFocusd(false);
                }}
                theme={{
                  colors: {
                    text: Colors.black ?? 'red',
                    placeholder: Colors.gray,
                    primary: isFocusd ? Colors.transparent : Colors.black,
                  },
                  fonts: {regular: {fontFamily: AppConstants.FONT1_MEDIUM}},
                }}
                style={[styles.input, getWidthStyle(), {...txtStyle}]}
                underlineColor="transparent"
              />
            </TouchOpactiyIndex>
          </View>
          <TouchOpactiyIndex
            onPress={
              disable
                ? null
                : () => {
                    if (data) {
                      setVisible(true);
                    } else {
                      if (onPress) {
                        onPress();
                      }
                    }
                  }
            }>
            <Image style={styles.img} source={icon ?? AppImages.arrow_down} />
          </TouchOpactiyIndex>

          {loading && (
            <ActivityIndicator
              animating={true}
              color={Colors.black}
              style={styles.activity}
            />
          )}
        </View>
      </View>
    );
  };

  return menu(widthMenuStyle);
  //
};

export default DropDownTextField;
