import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import Styles from './Styles';
import CMMainView from '../../../Components/Shared/Views/CMMainView';
import {IntroSliderPageController} from './IntroSliderController';
import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
import CMSliderView from '../../../Components/Shared/Views/CMSliderView';
import CMCustomPager from './Extension/CMCustomPager';
import CMActionButton from '../../../Components/Shared/Buttons/CMActionButton';
import CMBackButton from '../../../Components/Shared/Buttons/CMBackButton';
import {strings} from '../../../../Infrastructure/Helper/Utils/i18n';
import IntroSliderItem from '../../../Components/Screen/IntroSliderItem';

const IntroSliderPage = ({navigation, route}) => {
  // Set Deep state what mean deep that means all variable will be one object state rather than every variable in single state
  const [dState, SetDState] = useState({});
  // controller variables
  let [controller] = useState(new IntroSliderPageController());
  controller.dState = dState;
  controller.SetDState = SetDState;
  controller.navigation = navigation;
  // other variables

  //View Life Cycle
  useEffect(() => {
    controller?.setupSliderData();
    return () => {
      console.log('will unamount IntroSliderPage');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Listeners
  //UI Actions

  //UI Component

  const getHeaderTitle = () => {
    return (
      <View style={Styles.vuContainHeaderTitle}>
        <Image source={AppImages.app_logo} style={Styles.imgLogo} />
        <Text style={Styles.lblTitle}>{strings('quran_app')}</Text>
      </View>
    );
  };

  // Render UI Contain Screen
  return (
    <View style={Styles.vuPage}>
      <CMMainView>
        <View style={Styles.vuHeader}>
          {getHeaderTitle()}
          <CMCustomPager controller={controller} />
        </View>
        <View style={Styles.vuBody}>
          <View style={Styles.vuContainList}>
            <CMSliderView
              withoutPager
              onChangeIndex={index => {
                controller?.didChangeIndex(index ?? 0);
              }}
              scrollIndex={dState?.scrollTo ?? 0}
              style={Styles.vuIntroSlider}
              data={dState.arrSlider}
              CMItem={(item, idex) => {
                return <IntroSliderItem item={item} />;
              }}
            />
            <View style={Styles.vuContainBottom}>
              <View style={Styles.vuBottomButtons}>
                <CMBackButton
                  isHidden={(dState?.currentIndex ?? 0) === 0}
                  iconStyle={Styles.btnIconBack}
                  onBack={controller?.onPreivousClicked}
                />
                <CMActionButton
                  disabled={dState?.disabledButton}
                  onPress={controller?.onNextClicked}
                  labelStyle={Styles.btnTextNext}
                  style={Styles.btnNext}
                  title={dState?.btnName ?? strings('next')}
                />
              </View>
            </View>
          </View>
        </View>
      </CMMainView>
    </View>
  );
};

//Export screen Here
export default IntroSliderPage;
