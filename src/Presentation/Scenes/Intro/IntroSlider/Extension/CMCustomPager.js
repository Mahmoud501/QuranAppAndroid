import React from 'react';
import {View, FlatList} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import CMPager from '../../../../Components/Shared/Views/CMPager';

const styles = ScaledSheet.create({
  vuSliderPager: {},
  vuSliderPagerContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  vuSlideItem: {
    height: '100%',
  },
});

const CMCustomPager = props => {
  const {controller} = props;

  //UI compoenent
  const getSliderPagerItem = (object, index) => {
    if (index === (controller?.dState?.currentIndex ?? 0)) {
      object.select = true;
    } else {
      object.select = false;
    }
    return <CMPager item={object} />;
  };

  //UI

  return (
    <View>
      <FlatList
        style={styles.vuSliderPager}
        contentContainerStyle={styles.vuSliderPagerContent}
        data={controller?.dState.arrSlider}
        renderItem={({item, index}) => getSliderPagerItem(item, index)}
        keyExtractor={item => `${item.id}`}
        bounces={false}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CMCustomPager;
