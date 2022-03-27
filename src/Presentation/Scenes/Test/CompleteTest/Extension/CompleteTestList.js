import React from 'react';
import {FlatList} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
// import Colors from '../../../../../Infrastructure/Helper/Utils/Colors';
import Colors from '../../../../../Infrastructure/Helper/Utils/Colors';
import CMCompleteItem from '../../../../Components/Screen/CMCompleteItem';

const styles = ScaledSheet.create({
  vuList: {
    backgroundColor: Colors.white,
  },
});
const CompleteTestList = props => {
  // Set Deep state what mean deep that means all variable will be one object state rather than every variable in single state
  // showLangDialog
  const {controller} = props;
  const {headerView} = props;

  //UIAction

  //UI Component
  const getItem = (item, index) => {
    return (
      <CMCompleteItem
        onPress={() => {
          controller?.showWriteTest(true);
        }}
      />
    );
  };

  // Render UI Contain Screen
  return (
    <FlatList
      style={styles.vuList}
      data={controller?.dState?.data ?? []}
      renderItem={({item, index}) => getItem(item, index)}
      keyExtractor={item => `${item.id}`}
      bounces={true}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      ListHeaderComponent={headerView}
    />
  );
};

//Export screen Here
export default CompleteTestList;
