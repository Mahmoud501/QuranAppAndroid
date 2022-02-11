/**
 * @format
 * @flow
 */
import {EventRegister} from 'react-native-event-listeners';

export const EVENT_USER_DATA_CHANGED: string = 'userDataChanged';
export const EVENT_TAB_HOME: string = 'homeDidTapped';

export const emitEvent = (event: string, data: ?any) => {
  EventRegister.emit(event, data);
};

export const listenEvent = (event, listen) => {
  return EventRegister.addEventListener(event, data => {
    listen(data);
  });
};

export const removeEvent = listener => {
  EventRegister.removeEventListener(listener);
};
