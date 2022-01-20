import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import AppConstants from '../../../../Infrastructure/Helper/Utils/AppConstants';

export default ScaledSheet.create({
  vuPage: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  vuHeader: {
    backgroundColor: Colors.transparent,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '10@msr',
  },
  vuContainHeaderTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lblTitle: {
    fontFamily: AppConstants.FONT1_MEDIUM,
    fontSize: '20@msr',
    textAlign: 'center',
    color: Colors.c4,
  },
  imgLogo: {
    marginEnd: 15,
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  vuBody: {
    flex: 1,
    backgroundColor: Colors.whisper,
  },
  vuContainList: {
    flex: 1,
  },
  vuIntroSlider: {
    height: '90%',
  },
  vuContainBottom: {
    flex: 1,
  },
  vuBottomButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: '5@msr',
    marginHorizontal: '10@msr',
  },
  btnIconBack: {
    width: '15@msr',
    height: '25@msr',
  },
  btnNext: {
    height: '45@msr',
  },
  btnTextNext: {
    paddingHorizontal: '25@msr',
  },
});
