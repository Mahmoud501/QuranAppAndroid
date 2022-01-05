// #endregion

/**
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Portal, Dialog, TouchableRipple, Text} from 'react-native-paper';
import {BackHandler} from 'react-native';
import PropTypes from 'prop-types';
import {ScaledSheet} from 'react-native-size-matters';

import {
  strings,
  getCurrentLocale,
} from '../../../../Infrastructure/Helper/Utils/i18n';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
import AppConstants from '../../../../Infrastructure/Helper/Utils/AppConstants';
import CMActionButton from '../Buttons/CMActionButton';

// #region Styles
const styles = ScaledSheet.create({
  dialog: {
    backgroundColor: Colors.transparent,
  },
  img: {
    width: '25@msr',
    height: '25@msr',
    marginHorizontal: '10@msr',
    resizeMode: 'contain', // or 'stretch'
  },
  safeArea: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    marginVertical: '8@msr',
    backgroundColor: Colors.white,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imgChecked: {
    width: '15@msr',
    height: '15@msr',
  },
  inputView: {
    width: '90%',
    height: '50@msr',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 10,
    borderWidth: '1@msr',
    borderColor: Colors.black,
    marginTop: '16@msr',
    overflow: 'hidden',
  },
  searchImage: {
    marginStart: '10@msr',
    width: '25@msr',
    height: '25@msr',
  },
  input: {
    flex: 1,
    color: Colors.black,
    paddingHorizontal: '10@msr',
    fontWeight: 'normal',
    fontFamily: AppConstants.FONT1_REGULAR,
    fontSize: '15@msr',
    lineHeight: '23@msr',
  },
  flatList: {
    flex: 1,
    marginVertical: '8@msr',
  },
  itemContainer: {
    flex: 1,
    height: '30@msr',
    margin: '8@msr',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemRipple: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    flex: 1,
    marginStart: '8@msr',
    fontSize: '18@msr',
    lineHeight: '25@msr',
  },
  close: {
    width: '100%',
    alignSelf: 'center',
    marginVertical: '8@msr',
  },
});
// #endregion

// #region Types
type Props = {
  items?: ?Array<Object>,
  isMultiSelect: boolean,
  onItemSelected?: ?Function,
  selectedItems?: ?Array<Object>,
  show: boolean,
  dismiss?: ?Function,
};

type State = {
  items?: ?Array<Object>,
  selectedItems?: ?Array<Object>,
  searchText: string,
};
// #endregion

export default class SelectDialog extends React.PureComponent<Props, State> {
  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    isMultiSelect: false,
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      isCountryCode: props.isCountryCode || false,
      items: props.items || null,
      selectedItems: props.selectedItems || null,
      searchText: '',
    };
  }

  // #region Lifecycle
  static getDerivedStateFromProps(props: Props, state: State) {
    console.info('getDerivedStateFromProps', props, state);
    const stateItems: ?Array<Object> = props.items;
    const propsItems: ?Array<Object> = props.items;
    let newItems: ?Array<Object> = null;

    if (
      stateItems &&
      stateItems.length &&
      propsItems &&
      propsItems.length &&
      propsItems.length < stateItems.length
    ) {
      newItems = propsItems;
    } else if ((stateItems && stateItems.length) || state.searchText) {
      newItems = stateItems;
    } else {
      newItems = propsItems;
    }

    return {
      ...state,
      items: newItems,
      selectedItems: props.selectedItems || null,
    };
  }
  // #endregion

  backAction = () => {
    const {show, dismiss} = this.props;
    if (show == true) {
      dismiss();
      return true;
    }
    return false;
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backAction);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backAction);
  }

  // #region Text change events
  onChangeTextSearchText = (text: string) => {
    console.info('onChangeTextSearchText', text);

    this.setState({searchText: text}, () => {
      if (text) {
        this.filterList(text);
      } else {
        const {items} = this.props;
        this.setState({items});
      }
    });
  };
  // #endregion

  // #region Press events
  onItemPressed = (item: Object) => {
    console.info('onItemPressed', item);
    const {selectedItems} = this.state;
    const {isMultiSelect, onItemSelected, dismiss} = this.props;

    let newSelectedItems =
      Boolean(selectedItems) && Boolean(selectedItems?.length)
        ? Array.from(selectedItems || [])
        : [];

    let index = -1;

    for (let i = 0; i < newSelectedItems.length; i += 1) {
      if (newSelectedItems[i].id === item.id) {
        index = i;
      }
    }

    if (index > -1) {
      newSelectedItems.splice(index, 1);
    } else if (isMultiSelect) {
      newSelectedItems.push(item);
    } else {
      newSelectedItems = [item];
    }

    this.setState({selectedItems: newSelectedItems}, () => {
      if (onItemSelected) {
        onItemSelected(newSelectedItems);
      }

      if (!isMultiSelect && dismiss) {
        dismiss();
      }
    });
  };
  // #endregion

  filterList = (text: string) => {
    const {items} = this.props;

    if (items) {
      const filteredItems = [];

      items.forEach(item => {
        if (
          item.name?.toLowerCase()?.indexOf(text.toLowerCase()) > -1 ||
          item.code?.toLowerCase()?.indexOf(text.toLowerCase()) > -1
        ) {
          filteredItems.push(item);
        }
      });

      this.setState({items: filteredItems});
    }
  };

  isItemSelected = (item: Object) => {
    const {selectedItems} = this.state;

    if (selectedItems && selectedItems.length) {
      let itemSelected = false;

      selectedItems.forEach(dataItem => {
        if (dataItem.id === item.id) {
          itemSelected = true;
        }
      });

      return itemSelected;
    }

    return false;
  };

  getListItem = (item: Object) => {
    const {isCountryCode} = this.props;
    const textStyle = {
      ...styles.itemText,
      color: this.isItemSelected(item) ? Colors.black : Colors.black,
    };

    return (
      <View style={styles.itemContainer}>
        <TouchableRipple
          style={styles.itemRipple}
          onPress={() => this.onItemPressed(item)}>
          <View style={styles.itemRow}>
            <TouchableOpacity
              onPress={() => {
                this.onItemPressed(item);
              }}>
              <Image
                style={styles.imgChecked}
                source={
                  this.isItemSelected(item)
                    ? AppImages.activeChecked
                    : AppImages.notactiveChecked
                }
              />
            </TouchableOpacity>
            {isCountryCode && (
              <Image style={styles.img} source={{uri: item?.flag}} />
            )}
            <Text style={textStyle} numberOfLines={1} ellipsizeMode="tail">
              {isCountryCode ? item.code : item.name}
            </Text>
          </View>
        </TouchableRipple>
      </View>
    );
  };

  render() {
    const {show, dismiss} = this.props;
    if (show) {
      // Alert.alert('rsrs');

      const {searchText} = this.state;
      const {items} = this.state;
      this.setState({items});

      console.log(items);
      return (
        <Portal>
          <Dialog visible={show} onDismiss={dismiss} style={styles.dialog}>
            <SafeAreaView style={styles.safeArea}>
              <View style={styles.container}>
                <View style={styles.inputView}>
                  {/* <Image source={AppImages.logo} style={styles.searchImage} /> */}
                  <TextInput
                    keyboardType="default"
                    placeholder={strings('look_for')}
                    placeholderTextColor={Colors.black}
                    autoCapitalize="none"
                    style={{
                      ...styles.input,
                      textAlign: getCurrentLocale() === 'ar' ? 'right' : 'left',
                    }}
                    onChangeText={text => this.onChangeTextSearchText(text)}
                    value={searchText}
                    autoCompleteType="off"
                    autoCorrect={false}
                    underlineColorAndroid={Colors.transparent}
                  />
                </View>
                <FlatList
                  data={items}
                  renderItem={({item}) => this.getListItem(item)}
                  keyExtractor={item => `${item.id}`}
                  bounces={false}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  style={styles.flatList}
                />
              </View>
              <CMActionButton
                style={{backgroundColor: Colors.darkRed}}
                title={strings('close')}
                onPress={dismiss}
              />
            </SafeAreaView>
          </Dialog>
        </Portal>
      );
    }

    return null;
  }
}

// #region Prop Types
SelectDialog.propTypes = {
  items: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  isMultiSelect: PropTypes.bool,
  onItemSelected: PropTypes.func,
  selectedItems: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  show: PropTypes.bool.isRequired,
  dismiss: PropTypes.func,
  isCountryCode: PropTypes.bool,
};

SelectDialog.defaultProps = {
  items: null,
  isMultiSelect: false,
  onItemSelected: null,
  selectedItems: null,
  dismiss: null,
  isCountryCode: false,
};
// #endregion
