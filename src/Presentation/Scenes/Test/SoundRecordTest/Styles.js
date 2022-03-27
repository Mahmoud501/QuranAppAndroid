import AppConstants from '../../../../Infrastructure/Helper/Utils/AppConstants';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
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
  vuBody: {},
  vuHeader: {},
  vuHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '10@msr',
  },
  vuTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lblTitle: {
    fontFamily: AppConstants.FONT1_REGULAR,
    color: Colors.darkGray,
    fontSize: '15@msr',
    marginEnd: '10@msr',
  },
  btnIconClose: {
    width: '25@msr',
    height: '25@msr',
  },
  vuLine: {
    height: '0.5@msr',
    backgroundColor: Colors.lightGray,
  },
  vuData: {},
  btnShareSound: {
    backgroundColor: Colors.c2,
    width: '60%',
    alignSelf: 'center',
  },
  vuRecord: {
    alignItems: 'center',
    marginTop: '100@msr',
    marginBottom: '15@msr',
  },
  btnRecord: {
    alignSelf: 'center',
  },
  btnIconRecord: {
    width: '55@msr',
    height: '55@msr',
  },
  lblAyah: {
    fontFamily: AppConstants.FONT1_BOLD,
    fontSize: '13@msr',
    color: Colors.darkGray,
    textAlign: 'center',
  },
  vuAyah: {
    backgroundColor: Colors.c5,
    padding: '5@msr',
    marginBottom: '20@msr',
  },
  vuSounds: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: '20@msr',
  },
  btnIconProfile: {
    width: '55@msr',
    height: '55@msr',
  },
  btnProfile: {
    backgroundColor: Colors.red,
    padding: '20@msr',
    borderColor: Colors.red,
    borderWidth: 1,
  },
  btnIconReciter: {
    width: '95@msr',
    height: '95@msr',
  },
  btnReciter: {
    borderColor: Colors.darkGray,
    borderWidth: 1,
  },
  lblDot: {
    fontSize: '35@msr',
  },
  txtInput: {
    height: '40@msr',
    borderWidth: 0.5,
    borderColor: Colors.gray,
    backgroundColor: Colors.transparent,
    width: '100@msr',
    borderRadius: '20@msr',
  },
  txtDropDownWidth: {
    width: '150@msr',
  },
});
