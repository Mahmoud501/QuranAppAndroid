import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
// import Colors from '../../../../../Infrastructure/Helper/Utils/Colors';
import CMSortItem from '../../../../Components/Screen/CMSortItem';
import Colors from '../../../../../Infrastructure/Helper/Utils/Colors';
import DraggableFlatList from 'react-native-draggable-flatlist';

const styles = ScaledSheet.create({
  vuList: {
    backgroundColor: Colors.white,
  },
});
const SortFlatlList = props => {
  // Set Deep state what mean deep that means all variable will be one object state rather than every variable in single state
  // showLangDialog
  const {controller} = props;
  const {headerView} = props;

  //UIAction

  //UI Component
  const getItem = ({item, drag, isActive}: RenderItemParams<Item>) => {
    return (
      <CMSortItem
        style={{backgroundColor: isActive ? Colors.red : Colors.transparent}}
        drag={drag}
      />
    );
  };

  // Render UI Contain Screen
  return (
    <DraggableFlatList
      style={styles.vuList}
      data={controller?.dState?.data}
      onDragEnd={({data}) => controller?.setData(data)}
      renderItem={getItem}
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
export default SortFlatlList;
