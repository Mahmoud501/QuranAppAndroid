import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Styles from './Styles';
import CMMainView from '../../../Components/Shared/Views/CMMainView';
import {RegisterController} from './RegisterController';
import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
import CMBackButton from '../../../Components/Shared/Buttons/CMBackButton';
import {strings} from '../../../../Infrastructure/Helper/Utils/i18n';
import CMGradientView from '../../../Components/Shared/Lib/CMGradientView';
import CMBgView from '../../../Components/Shared/Views/CMBgView';
import CMScrollView from '../../../Components/Shared/Views/CMScrollView';
import NormalTextField from '../../../Components/Shared/TextFields/NormalTextField';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import TouchOpactiyIndex from '../../../Components/Shared/TouchOpactiy/TouchOpactiyIndex';
import CMLinkButton from '../../../Components/Shared/Buttons/CMLinkButton';

const RegisterPage = ({navigation, route}) => {
  // Set Deep state what mean deep that means all variable will be one object state rather than every variable in single state
  const [dState, SetDState] = useState({});
  // controller variables
  let [controller] = useState(new RegisterController());
  controller.dState = dState;
  controller.SetDState = SetDState;

  // other variables

  //View Life Cycle
  useEffect(() => {
    return () => {
      console.log('will unamount RegisterPage');
    };
  }, []);

  // Listeners
  //UI Actions

  //UI Component

  // Render UI Contain Screen
  return (
    <CMGradientView style={Styles.vuPage}>
      <CMBgView>
        <CMMainView>
          <View style={Styles.vuHeader}>
            <View style={Styles.vuHeaderTitles}>
              <CMBackButton
                style={Styles.btnBack}
                lblStyle={Styles.lblTitle}
                navigation={navigation}
                title={strings('quran_app_captial')}
              />
            </View>
            <View style={Styles.vuLine} />
          </View>
          <CMScrollView style={Styles.vuBody}>
            <View style={Styles.vuInfo}>
              <Text style={Styles.lblSubTitle}>{strings('aslamualaikum')}</Text>
              <Text style={Styles.lblDesc}>{strings('register_title')}</Text>
            </View>
            <View style={Styles.vuForm}>
              <NormalTextField
                objectPress={{icon: AppImages.edit_icon}}
                errormMessage={dState?.errorName}
                value={dState?.name}
                onChangeText={text => {
                  SetDState(pre => {
                    return {...pre, name: text};
                  });
                }}
                placeholder={strings('name')}
                color={Colors.black}
                style={Styles.txtInput}
              />
              <NormalTextField
                objectPress={{icon: AppImages.edit_icon}}
                keyboardType="phone-pad"
                errormMessage={dState?.errorPhone}
                value={dState?.phone}
                onChangeText={text => {
                  SetDState(pre => {
                    return {...pre, phone: text};
                  });
                }}
                placeholder={strings('phone')}
                color={Colors.black}
                style={Styles.txtInput}
              />
              <NormalTextField
                objectPress={{icon: AppImages.edit_icon}}
                keyboardType="number-pad"
                errormMessage={dState?.errorAge}
                value={dState?.age}
                onChangeText={text => {
                  SetDState(pre => {
                    return {...pre, age: text};
                  });
                }}
                placeholder={strings('age')}
                color={Colors.black}
                style={Styles.txtInput}
              />
              <NormalTextField
                objectPress={{icon: AppImages.edit_icon}}
                errormMessage={dState?.errorAddress}
                value={dState?.address}
                onChangeText={text => {
                  SetDState(pre => {
                    return {...pre, address: text};
                  });
                }}
                placeholder={strings('address')}
                color={Colors.black}
                style={Styles.txtInput}
              />
            </View>
            <CMGradientView
              colors={[Colors.white, Colors.c2]}
              end={{x: 1, y: 3}}
              style={Styles.vuGradienSubmit}>
              <TouchOpactiyIndex activeOpacity={0.5} onPress={() => {}}>
                <View style={Styles.vuSubmit}>
                  <Text style={Styles.lblSubmit}>{strings('save_start')}</Text>
                </View>
              </TouchOpactiyIndex>
            </CMGradientView>
            <CMLinkButton
              title={strings('skip')}
              lblStyle={Styles.btnTextSkip}
              style={Styles.btnSkip}
              onPress={() => {
                navigation.navigate('ReaderListPage');
              }}
            />
          </CMScrollView>
        </CMMainView>
      </CMBgView>
    </CMGradientView>
  );
};

//Export screen Here
export default RegisterPage;
