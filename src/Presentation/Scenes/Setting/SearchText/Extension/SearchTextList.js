import React from 'react';
import {FlatList} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
// import Colors from '../../../../../Infrastructure/Helper/Utils/Colors';
import CMSearchTextItem from '../../../../Components/Screen/CMSearchTextItem';
import Colors from '../../../../../Infrastructure/Helper/Utils/Colors';

const styles = ScaledSheet.create({
  vuList: {
    backgroundColor: Colors.white,
  },
});
const SearchTextList = props => {
  // Set Deep state what mean deep that means all variable will be one object state rather than every variable in single state
  // showLangDialog
  const {controller} = props;
  const {headerView} = props;

  //UIAction

  //UI Component
  const getItem = (item, index) => {
    return <CMSearchTextItem onPress={() => {}} />;
  };
  // Render UI Contain Screen
  return (
    <FlatList
      style={styles.vuList}
      data={
        controller?.readerList ?? [
          {id: 1},
          {id: 2},
          {id: 3},
          {id: 4},
          {id: 5},
          {id: 6},
          {id: 7},
          {id: 8},
          {id: 9},
          {id: 10},
          {id: 11},
          {id: 72},
          {id: 714},
          {id: 71411},
        ]
      }
      renderItem={({item, index}) => getItem(item, index)}
      keyExtractor={item => `${item.id}`}
      bounces={true}
      numColumns={1}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      ListHeaderComponent={headerView}
    />
  );
};

//Export screen Here
export default SearchTextList;
