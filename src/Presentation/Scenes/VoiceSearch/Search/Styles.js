import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import AppConstants from '../../../../Infrastructure/Helper/Utils/AppConstants';

export default ScaledSheet.create({
  vuPage: {
    flex: 1,
  },
  vuHeader: {},
  vuHeaderTitles: {
    flexDirection: 'row',
    marginHorizontal: '10@msr',
  },
  btnBack: {
    marginVertical: '10@msr',
  },
  lblTitle: {
    color: Colors.white,
    fontFamily: AppConstants.FONT1_BOLD,
    fontSize: '23@msr',
  },
  vuLine: {
    marginHorizontal: '10@msr',
    height: '0.5@msr',
    backgroundColor: Colors.c5,
  },
  vuBody: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: '15@msr',
  },
  lblSubTitle: {
    color: Colors.darkGray,
    fontFamily: AppConstants.FONT1_BOLD,
    fontSize: '23@msr',
    marginBottom: '10@msr',
  },
  vuSearchWords: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '15@msr',
    backgroundColor: Colors.c5,
    borderRadius: '8@msr',
    alignItems: 'center',
  },
  imgArrow: {
    width: '10@msr',
    height: '14@msr',
  },
  lblSearchWords: {
    color: Colors.c2,
    fontFamily: AppConstants.FONT1_BOLD,
    fontSize: '14@msr',
  },
  vuContainProgress: {
    alignItems: 'center',
    marginTop: '45@msr',
  },
  vuMic: {
    marginTop: '55@msr',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: '180@msr',
    width: '180@msr',
    borderRadius: '90@msr',
    borderColor: Colors.c1,
    borderWidth: 6,
  },
  lblMic: {
    color: Colors.darkGray,
    fontFamily: AppConstants.FONT1_REGULAR,
    fontSize: '14@msr',
    marginBottom: '10@msr',
  },
  imgMic: {
    width: '30@msr',
    height: '40@msr',
  },
});
