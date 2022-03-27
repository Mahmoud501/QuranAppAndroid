import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Styles from './Styles';
import CMMainView from '../../../Components/Shared/Views/CMMainView';
import {ContactusController} from './ContactusController';
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

const ContactusPage = ({navigation, route}) => {
  // Set Deep state what mean deep that means all variable will be one object state rather than every variable in single state
  const [dState, SetDState] = useState({});
  // controller variables
  let [controller] = useState(new ContactusController());
  controller.dState = dState;
  controller.SetDState = SetDState;

  // other variables

  //View Life Cycle
  useEffect(() => {
    return () => {
      console.log('will unamount ContactusPage');
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
                title={strings('contact_us')}
              />
            </View>
            <View style={Styles.vuLine} />
          </View>
          <CMScrollView style={Styles.vuBody}>
            <View style={Styles.vuInfo}>
              <Text style={Styles.lblDesc}>{strings('contact_us_title')}</Text>
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
                keyboardType="email-address"
                errormMessage={dState?.errorEmail}
                value={dState?.email}
                onChangeText={text => {
                  SetDState(pre => {
                    return {...pre, email: text};
                  });
                }}
                placeholder={strings('email')}
                color={Colors.black}
                style={Styles.txtInput}
              />
              <NormalTextField
                objectPress={{icon: AppImages.edit_icon}}
                errormMessage={dState?.errorSubject}
                value={dState?.subject}
                onChangeText={text => {
                  SetDState(pre => {
                    return {...pre, subject: text};
                  });
                }}
                placeholder={strings('subject')}
                color={Colors.black}
                style={Styles.txtInput}
              />
              <NormalTextField
                objectPress={{icon: AppImages.edit_icon}}
                multiline
                errormMessage={dState?.errorMessage}
                value={dState?.message}
                onChangeText={text => {
                  SetDState(pre => {
                    return {...pre, message: text};
                  });
                }}
                placeholder={strings('message')}
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
                  <Text style={Styles.lblSubmit}>{strings('send')}</Text>
                </View>
              </TouchOpactiyIndex>
            </CMGradientView>
          </CMScrollView>
        </CMMainView>
      </CMBgView>
    </CMGradientView>
  );
};

//Export screen Here
export default ContactusPage;
