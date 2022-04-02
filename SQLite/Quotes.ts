import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import * as SQLite from 'expo-sqlite';
import { EpisodeQuote } from '../types/EpisodeQuote';

export async function checkDatabase() {
  if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
  }
  if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite/db.sqlite')).exists) {
    console.log('Db does not exist... downloading')
    await FileSystem.downloadAsync(
      Asset.fromModule(require('../assets/db.sqlite')).uri,
      FileSystem.documentDirectory + 'SQLite/db.sqlite'
    );
    console.log('db downloaded.')
  } else {
    console.log('db exists')
  }
}

export function getRandomQuote(setQuote: React.Dispatch<React.SetStateAction<EpisodeQuote>>) {
  const db = SQLite.openDatabase('db.sqlite')
  const query = 'SELECT * FROM Quotes q JOIN Episodes e ON q.quoteEpisodeID = e.episodeID ORDER BY RANDOM() LIMIT 1'
  db.transaction(tx => {
    tx.executeSql(query, undefined, (tx, {rows: {_array}}) => {
      const epQuote: EpisodeQuote[] = _array;
      setQuote(epQuote[0]);
    })
  });
};
