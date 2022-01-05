import moment from 'moment';
import 'moment/locale/ar'; // without this line it didn't work

import {getCurrentLocale} from './i18n';
export const getDateFullDescription = (date, format) => {
  moment.locale(getCurrentLocale()); // returns the new locale, in this case 'ar'
  let momentObj = moment(date, format ?? 'YYYY-MM-DD');
  let showDate = moment(momentObj).format('MMM DD, YYYY');
  return showDate;
};

export const getDateStr = date => {
  if (date) {
    const formattedYear = `${date.getFullYear()}`;
    const formattedMonth = `0${date.getMonth() + 1}`.slice(-2);
    const formattedDay = `0${date.getDate()}`.slice(-2);
    const formattedHour = `0${date.getHours()}`.slice(-2);
    const formattedMin = `0${date.getMinutes()}`.slice(-2);
    let str = `${formattedYear.toString()}-${formattedMonth.toString()}-${formattedDay.toString()} ${formattedHour.toString()}:${formattedMin.toString()}:00`;
    let dateStr = `${formattedYear.toString()}-${formattedMonth.toString()}-${formattedDay.toString()}`;
    let timeStr = `${formattedHour.toString()}:${formattedMin.toString()}`;

    return {
      str,
      dateStr,
      timeStr,
      formattedYear,
      formattedMonth,
      formattedDay,
      formattedHour,
      formattedMin,
    };
  } else {
    return null;
  }
};
