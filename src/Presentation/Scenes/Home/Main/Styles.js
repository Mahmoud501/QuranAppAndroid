import {ScaledSheet} from 'react-native-size-matters';
import AppConstants from '../../../../Infrastructure/Helper/Utils/AppConstants';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';

export default ScaledSheet.create({
  vuPage: {
    flex: 1,
  },
  vuOptions: {
    position: 'absolute',
  },
  vuHeader: {
    marginHorizontal: '10@msr',
    marginVertical: '12@msr',
  },
  vuHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  vuRightButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vuBody: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  vuReciterImage: {
    width: '45@msr',
    height: '45@msr',
    borderRadius: '22.5@msr',
    borderColor: Colors.white,
    borderWidth: '3@msr',
    resizeMode: 'cover',
  },
  btnHeaderIcon: {
    padding: '10@msr',
    borderRadius: '20@msr',
    backgroundColor: Colors.c4,
    marginEnd: '10@msr',
  },
  iconHeaderIcon: {
    width: '15@msr',
    height: '15@msr',
  },
  btnHeaderTafseerIcon: {
    padding: '12@msr',
    borderRadius: '20@msr',
    backgroundColor: Colors.c4,
    marginEnd: '10@msr',
  },
  iconHeaderTafseerIcon: {
    width: '13@msr',
    height: '13@msr',
  },
  btnHeaderCloseIcon: {
    padding: '13@msr',
    borderRadius: '17.5@msr',
    backgroundColor: Colors.red,
  },
  iconHeaderCloseIcon: {
    width: '10@msr',
    height: '10@msr',
  },
  btnHeaderMarkIcon: {
    padding: '10@msr',
    borderRadius: '20@msr',
    backgroundColor: Colors.c4,
    marginEnd: '10@msr',
  },
  iconHeaderMarkIcon: {
    width: '16@msr',
    height: '16@msr',
  },
  vuBasmala: {
    marginTop: '10@msr',
  },
  vuBasmalaLine: {
    backgroundColor: Colors.white,
    height: 0.5,
  },
  lblBasmala: {
    marginTop: '10@msr',
    color: Colors.white,
    fontFamily: AppConstants.FONT1_BOLD,
    fontSize: '20@msr',
    alignSelf: 'center',
  },
  btnQuranPDF: {
    position: 'absolute',
    bottom: '15@msr',
    right: '15@msr',
    backgroundColor: Colors.c5,
    borderRadius: '25@msr',
    padding: '10@msr',
  },
  iconQuranPDF: {
    backgroundColor: Colors.c5,
    width: '30@msr',
    height: '30@msr',
    resizeMode: 'contain',
  },
});
