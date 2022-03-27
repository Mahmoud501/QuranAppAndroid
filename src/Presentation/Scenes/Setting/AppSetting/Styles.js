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
  },
  vuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15@msr',
    margin: '15@msr',
    borderRadius: '8@msr',
    borderColor: Colors.lightGray,
    borderWidth: '1@msr',
  },
  lblItem: {
    color: Colors.darkGray,
    fontFamily: AppConstants.FONT1_BOLD,
    fontSize: '15@msr',
  },
  imgItem: {
    width: '10@msr',
    height: '16@msr',
  },
});
