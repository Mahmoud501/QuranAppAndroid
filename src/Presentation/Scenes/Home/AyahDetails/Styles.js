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
    height: '1@msr',
    backgroundColor: Colors.c5,
  },
  vuContainScroll: {
    flex: 1,
    backgroundColor: Colors.c5,
  },
  vuBody: {
    flex: 1,
  },
  vuReciter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '15@msr',
    marginHorizontal: '10@msr',
  },
  imgReciter: {
    width: '30@msr',
    height: '30@msr',
    borderRadius: '15@msr',
    marginEnd: '5@msr',
  },
  lblReciter: {
    color: Colors.white,
    fontFamily: AppConstants.FONT1_BOLD,
    fontSize: '14@msr',
  },
  lblAyah: {
    textAlign: 'center',
    color: Colors.c4,
    fontFamily: AppConstants.FONT1_REGULAR,
    fontSize: '25@msr',
    marginVertical: '30@msr',
  },
  lblTafseer: {
    marginHorizontal: '10@msr',
    textAlign: 'right',
    color: Colors.darkGray,
    fontFamily: AppConstants.FONT1_REGULAR,
    fontSize: '15@msr',
  },
});
