import AppConstants from '../../../../Infrastructure/Helper/Utils/AppConstants';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

export default ScaledSheet.create({
  vuDialog: {
    borderTopStartRadius: '15@msr',
    borderTopEndRadius: '15@msr',
    marginHorizontal: 0,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  vuBody: {
    maxHeight: Dimensions.get('window').height * 0.5,
  },
  vuHeader: {},
  vuHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '10@msr',
  },
  lblTitle: {
    flex: 1,
    fontFamily: AppConstants.FONT1_REGULAR,
    color: Colors.darkGray,
    fontSize: '15@msr',
  },
  btnIconClose: {
    width: '25@msr',
    height: '25@msr',
  },
  vuLine: {
    height: '0.5@msr',
    backgroundColor: Colors.lightGray,
  },
  vuData: {
    margin: '10@msr',
  },
  vuDataContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtInput: {
    borderRadius: '30@msr',
    marginEnd: '10@msr',
    flex: 1,
    width: 0,
    borderWidth: 0.5,
    borderColor: Colors.gray,
    marginBottom: '10@msr',
    backgroundColor: Colors.transparent,
  },
  btnIconSend: {
    width: '35@msr',
    height: '35@msr',
  },
  btnSend: {
    borderRadius: '30@msr',
    padding: '10@msr',
    backgroundColor: Colors.darkGray,
  },
});
