/**
 * @flow
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

// #region Keys
// #endregion

/**
 * Get data from async storage.
 *
 * @param {String} key The key for data to get.
 *
 * @returns The data if available or null if not available or error.
 */
export async function getData(key: string): Promise<string | null> {
  try {
    const value = await AsyncStorage.getItem(key);
    const strValue = value != null ? JSON.parse(value) : null;
    // console.info(`Value for "${key}": "${value}"`);
    return strValue;
  } catch (e) {
    // Error reading value.
    console.error(`Error reading value for "${key}"`, e);
    return null;
  }
}

/**
 * Save data to async storage.
 * If error occurred while saving log that.
 *
 * @param {Sting} key The key for data to save.
 * @param {*} value The value to be saved.
 *
 * @returns "true" if data saved or "false" if error.
 */
export async function setData(key: string, value: Object): Promise<boolean> {
  try {
    const strValue = JSON.stringify(value);
    console.log(strValue, '|', value, 'new cache data');
    await AsyncStorage.setItem(key, strValue);
    // console.info(`Done saving "${value}" for "${key}"`);
    return true;
  } catch (e) {
    // Error saving.
    console.error(`Error saving "${value}" for "${key}"`, e);
    return false;
  }
}

/**
 * Save multi data to async storage.
 * If error occurred while saving log that.
 *
 * @param {Array} data The array of data to save.
 *
 * @returns "true" if data saved or "false" if error.
 */
export async function setMultiData(
  data: Array<Array<string>>,
): Promise<boolean> {
  try {
    await AsyncStorage.multiSet(data);
    // console.info('Done saving multi data', data);
    return true;
  } catch (e) {
    // Error saving.
    console.error('Error saving multi data', data, e);
    return false;
  }
}

/**
 * Remove data from async storage.
 *
 * @param {String} key The key for data to remove.
 *
 * @returns "true" if data removed or "false" if error.
 */
export async function removeData(key: string): Promise<boolean> {
  try {
    await AsyncStorage.removeItem(key);
    // console.info(`Done removing value for "${key}"`);
    return true;
  } catch (e) {
    // Error removing item.
    console.error(`Error removing value for "${key}"`);
    return false;
  }
}

/**
 * Remove multi data from async storage.
 *
 * @param {Array} keys The array of keys for data to remove.
 *
 * @returns "true" if data removed or "false" if error.
 */
export async function removeMultiData(keys: Array<string>): Promise<boolean> {
  try {
    await AsyncStorage.multiRemove(keys);
    // console.info('Done removing values', keys);
    return true;
  } catch (e) {
    // Error removing item.
    console.error('Error removing values', keys);
    return false;
  }
}
