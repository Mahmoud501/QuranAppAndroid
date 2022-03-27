import React from 'react';
import {View, Text} from 'react-native';
import {Portal, Dialog} from 'react-native-paper';
import Pulse from 'react-native-pulse';

import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
import {strings} from '../../../../Infrastructure/Helper/Utils/i18n';
import CMIconButton from '../../../Components/Shared/Buttons/CMIconButton';
import {SoundRecordController} from './SoundRecordController';
import Styles from './Styles';
import CMActionButton from '../../../Components/Shared/Buttons/CMActionButton';
import DropDownTextField from '../../../Components/Shared/TextFields/DropDownTextField';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';

const SoundRecordTestPage = ({showDialog, onDismiss}) => {
  const [dState, SetDState] = React.useState({});
  let [controller] = React.useState(new SoundRecordController());
  controller.dState = dState;
  controller.SetDState = SetDState;

  React.useEffect(() => {
    SetDState({});
  }, [showDialog]);

  return (
    <Portal>
      <Dialog style={Styles.vuDialog} visible={showDialog} dismissable={false}>
        <View style={Styles.vuBody}>
          <View style={Styles.vuHeader}>
            <View style={Styles.vuHeaderContent}>
              <View style={Styles.vuTitle}>
                <Text style={Styles.lblTitle}>
                  {strings('sound_record_test_title')}
                </Text>
                <DropDownTextField
                  isHideIcon={false}
                  data={[
                    {id: 0, title: strings('choose')},
                    {id: 1, title: strings('all')},
                  ]}
                  widthMenuStyle={Styles.txtDropDownWidth}
                  style={Styles.txtInput}
                  value={dState?.selectedSelection}
                  placeholder={strings('all')}
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
              </View>

              <CMIconButton
                onPress={onDismiss}
                styleIcon={Styles.btnIconClose}
                source={AppImages.gray_close_icon}
              />
            </View>
            <View style={Styles.vuLine} />
          </View>
          <View style={Styles.vuData}>
            <View style={Styles.vuAyah}>
              <Text style={Styles.lblAyah}>
                Ayah HereAyah HereAyah HereAyah HereAyah HereAyah HereAyah
                HereAyah HereAyah HereAyah HereAyah HereAyah HereAyah Here
              </Text>
            </View>
            <View style={Styles.vuSounds}>
              <CMIconButton
                style={Styles.btnProfile}
                styleIcon={Styles.btnIconProfile}
                source={AppImages.profile}
              />
              <Text style={Styles.lblDot}>:</Text>
              <CMIconButton
                style={Styles.btnReciter}
                styleIcon={Styles.btnIconReciter}
                source={AppImages.splash}
              />
            </View>
            <CMActionButton
              style={Styles.btnShareSound}
              title={strings('share_your_sound')}
            />
            <View style={Styles.vuRecord}>
              <Pulse
                color="red"
                numPulses={2}
                diameter={200}
                speed={20}
                duration={2000}
              />

              <CMIconButton
                onPress={() => {}}
                style={Styles.btnRecord}
                styleIcon={Styles.btnIconRecord}
                source={AppImages.red_record}
              />
            </View>
          </View>
        </View>
      </Dialog>
    </Portal>
  );
};

export default SoundRecordTestPage;
