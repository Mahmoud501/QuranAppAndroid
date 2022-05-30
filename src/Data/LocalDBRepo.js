import {AppState} from 'react-native';
import SQLite from 'react-native-sqlite-storage';

let databaseInstance: SQLite.SQLiteDatabase | null = null;
let appState: AppState.AppStateStatus = 'active';

export interface Database {
  createTable(): void;
}

async function openDatabase(): Promise<SQLite.SQLiteDatabase> {
  SQLite.DEBUG(__DEV__);
  SQLite.enablePromise(true);

  // If database is initialized before then return it.
  if (databaseInstance) {
    console.info(
      'Database::Database is already open returning the existing instance',
    );

    return databaseInstance;
  }

  // Otherwise create a new instance.
  const db: Promise<SQLite.SQLiteDatabase> = await SQLite.openDatabase(
    {
      name: 'quran_data.db',
      createFromLocation: 1,
    },
    () => {
      console.info('Database::Database opened');
      console.log('sucess');
    },
    err => {
      console.log('err db' + err);
    },
  );

  databaseInstance = db;
  return db;
}

async function closeDatabase(): Promise<void> {
  if (databaseInstance === undefined || databaseInstance == null) {
    console.log("Database::No need to close DB again - it's already closed");
    return;
  }

  const status = await databaseInstance.close();
  console.log('Database::Database closed', status);
  databaseInstance = null;
}

async function getDatabase(): Promise<SQLite.SQLiteDatabase> {
  // If database is initialized before then return it.
  if (databaseInstance !== undefined && databaseInstance != null) {
    return Promise.resolve(databaseInstance);
  }

  // Otherwise open the database first.
  return openDatabase();
}

// function getQuranWordsListFromDatabaseResult(results: any): QuranWord[] {
//   console.info(
//     'Database::getQuranWordsListFromDatabaseResult::results',
//     results,
//   );

//   if (results === undefined) {
//     return [];
//   }

//   const count = results.rows.length;
//   const list: QuranWord[] = [];

//   for (let i = 0; i < count; i += 1) {
//     const row = results.rows.item(i);

//     const {
//       id,
//       text,
//       simple,
//       sura,
//       aya,
//       quran_aya,
//       page,
//       line,
//       position,
//       juz,
//       hizb,
//       rub,
//       type,
//       unicode,
//       web_code,
//       web_code_v3,
//       mobile_code,
//     } = row;

//     list.push({
//       id,
//       text,
//       simple,
//       sura,
//       aya,
//       quran_aya,
//       page,
//       line,
//       position,
//       juz,
//       hizb,
//       rub,
//       type,
//       unicode,
//       web_code,
//       web_code_v3,
//       mobile_code,
//       fullAyah: null,
//     });
//   }

//   return list;
// }

async function createTable() {
  console.info('Database::creatTable');

  return getDatabase()
    .then(db => {
      console.log('hhhhhhhhhhhhhhhhhhh');
      db.executeSql('SELECT * FROM demo;');
    })
    .then(results => {
      console.log('fffqqq' + ' ' + results);
    });
}

// Handle the app going from foreground to background, and vice versa.
function handleAppStateChange(nextAppState: AppState.AppStateStatus) {
  if (appState === 'active' && nextAppState.match(/inactive|background/)) {
    // App has moved from the foreground into the background (or become inactive)
    console.info(
      'Database::App has gone to the background - closing DB connection.',
    );

    closeDatabase();
  }

  appState = nextAppState;
}

// Listen to app state changes. Close the database when the app is put into the background (or enters the "inactive" state)
console.info('Database::Adding listener to handle app state changes');
AppState.addEventListener('change', handleAppStateChange);

// Export the functions which fulfill the Database interface contract
export const sqliteDatabase: Database = {
  createTable,
};
