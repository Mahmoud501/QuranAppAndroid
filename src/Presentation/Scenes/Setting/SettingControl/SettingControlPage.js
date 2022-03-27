import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Styles from './Styles';
import CMMainView from '../../../Components/Shared/Views/CMMainView';
import {SettingControlController} from './SettingControlController';
import CMBackButton from '../../../Components/Shared/Buttons/CMBackButton';
import {strings} from '../../../../Infrastructure/Helper/Utils/i18n';
import CMGradientView from '../../../Components/Shared/Lib/CMGradientView';
import CMBgView from '../../../Components/Shared/Views/CMBgView';
import CMScrollView from '../../../Components/Shared/Views/CMScrollView';
import DropDownTextField from '../../../Components/Shared/TextFields/DropDownTextField';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import TouchOpactiyIndex from '../../../Components/Shared/TouchOpactiy/TouchOpactiyIndex';

const SettingControlPage = ({navigation, route}) => {
  // Set Deep state what mean deep that means all variable will be one object state rather than every variable in single state
  const [dState, SetDState] = useState({});
  // controller variables
  let [controller] = useState(new SettingControlController());
  controller.dState = dState;
  controller.SetDState = SetDState;

  // other variables

  //View Life Cycle
  useEffect(() => {
    return () => {
      console.log('will unamount SettingControlPage');
    };
  }, []);

  // Listeners
  //UI Actions

  const onSaveClicked = () => {
    navigation.goBack();
  };

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
                title={strings('quran_app_setting')}
              />
            </View>
            <View style={Styles.vuLine} />
          </View>
          <CMScrollView style={Styles.vuBody}>
            <View style={Styles.vuForm}>
              <DropDownTextField
                isHideIcon={false}
                data={[
                  {id: 0, title: strings('choose')},
                  {id: 1, title: strings('yes')},
                  {id: 2, title: strings('no')},
                ]}
                widthMenuStyle={Styles.txtDropDownWidth}
                style={Styles.txtInput}
                value={dState?.selectedQuranMark}
                placeholder={strings('want_quran_with_marks')}
                color={Colors.black}
                onSelectItem={item => {
                  SetDState(pre => {
                    return {
                      ...pre,
                      selectedQuranMark: item,
                    };
                  });
                }}
              />
              <DropDownTextField
                isHideIcon={false}
                data={[
                  {id: 0, title: strings('choose')},
                  {id: 1, title: strings('yes')},
                  {id: 2, title: strings('no')},
                ]}
                widthMenuStyle={Styles.txtDropDownWidth}
                style={Styles.txtInput}
                value={dState?.selectedSelection}
                placeholder={strings('single_selection')}
                color={Colors.black}
                onSelectItem={item => {
                  SetDState(pre => {
                    return {
                      ...pre,
                      selectedSelection: item,
                    };
                  });
                }}
              />
              <DropDownTextField
                isHideIcon={false}
                data={[
                  {id: 0, title: strings('choose')},
                  {id: 1, title: strings('middle')},
                  {id: 2, title: strings('top')},
                  {id: 3, title: strings('nothing')},
                ]}
                widthMenuStyle={Styles.txtDropDownWidth}
                style={Styles.txtInput}
                value={dState?.selectedAyahScroll}
                placeholder={strings('home_scroll_ayah')}
                color={Colors.black}
                onSelectItem={item => {
                  SetDState(pre => {
                    return {
                      ...pre,
                      selectedAyahScroll: item,
                    };
                  });
                }}
              />
              <DropDownTextField
                isHideIcon={false}
                data={[
                  {id: 0, title: strings('choose')},
                  {id: 1, title: strings('cairo')},
                  {id: 2, title: strings('authman')},
                  {id: 3, title: strings('normal')},
                  {id: 4, title: strings('quran_kareem')},
                  {id: 5, title: strings('quran_majeed')},
                  {id: 6, title: strings('mushaf')},
                ]}
                widthMenuStyle={Styles.txtDropDownWidth}
                style={Styles.txtInput}
                value={dState?.selectedQuranFont}
                placeholder={strings('quran_font')}
                color={Colors.black}
                onSelectItem={item => {
                  SetDState(pre => {
                    return {
                      ...pre,
                      selectedQuranFont: item,
                    };
                  });
                }}
              />
              <DropDownTextField
                isHideIcon={false}
                data={[
                  {id: 0, title: strings('choose')},
                  {id: 1, title: strings('normal')},
                  {id: 2, title: strings('big')},
                  {id: 3, title: strings('large')},
                ]}
                widthMenuStyle={Styles.txtDropDownWidth}
                style={Styles.txtInput}
                value={dState?.selectedQuranFontSize}
                placeholder={strings('quran_font_size')}
                color={Colors.black}
                onSelectItem={item => {
                  SetDState(pre => {
                    return {
                      ...pre,
                      selectedQuranFontSize: item,
                    };
                  });
                }}
              />
              <DropDownTextField
                isHideIcon={false}
                data={[
                  {id: 0, title: strings('choose')},
                  {id: 1, title: strings('normal')},
                  {id: 2, title: strings('big')},
                  {id: 3, title: strings('large')},
                ]}
                widthMenuStyle={Styles.txtDropDownWidth}
                style={Styles.txtInput}
                value={dState?.selectedTafseerFontSize}
                placeholder={strings('tafseer_font_size')}
                color={Colors.black}
                onSelectItem={item => {
                  SetDState(pre => {
                    return {
                      ...pre,
                      selectedTafseerFontSize: item,
                    };
                  });
                }}
              />
            </View>
            <CMGradientView
              colors={[Colors.white, Colors.c2]}
              end={{x: 1, y: 3}}
              style={Styles.vuGradienSubmit}>
              <TouchOpactiyIndex activeOpacity={0.5} onPress={onSaveClicked}>
                <View style={Styles.vuSubmit}>
                  <Text style={Styles.lblSubmit}>{strings('save')}</Text>
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
export default SettingControlPage;
