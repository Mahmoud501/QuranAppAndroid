import React from 'react';
import {View, Text} from 'react-native';
import {Portal, Dialog} from 'react-native-paper';

import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import {strings} from '../../../../Infrastructure/Helper/Utils/i18n';
import CMIconButton from '../../../Components/Shared/Buttons/CMIconButton';
import {WriteTestController} from './WriteTestController';
import NormalTextField from '../../../Components/Shared/TextFields/NormalTextField';
import Styles from './Styles';

const WriteTestPage = ({showDialog, onDismiss}) => {
  const [dState, SetDState] = React.useState({});
  let [controller] = React.useState(new WriteTestController());
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
              <Text style={Styles.lblTitle}>{strings('write_test_title')}</Text>
              <CMIconButton
                onPress={onDismiss}
                styleIcon={Styles.btnIconClose}
                source={AppImages.gray_close_icon}
              />
            </View>
            <View style={Styles.vuLine} />
          </View>
          <View style={Styles.vuData}>
            <View style={Styles.vuDataContent}>
              <NormalTextField
                autoFocus
                keyboardType={'email-address'}
                multiline
                errormMessage={dState?.errorWriteTest}
                value={dState?.writeTest}
                onChangeText={text => {
                  SetDState(pre => {
                    return {...pre, writeTest: text};
                  });
                }}
                placeholder={strings('write')}
                color={Colors.black}
                style={Styles.txtInput}
              />
              <CMIconButton
                styleIcon={Styles.btnIconSend}
                source={AppImages.sending}
                style={Styles.btnSend}
              />
            </View>
          </View>
        </View>
      </Dialog>
    </Portal>
  );
};

export default WriteTestPage;
