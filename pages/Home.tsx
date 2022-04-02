import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import StyledButton from '../components/StyledButton';
import { getRandomQuote } from '../SQLite/Quotes';
import { EpisodeQuote, emptyEpisodeQuote } from '../types/EpisodeQuote';
import QuoteView from '../components/QuoteView';


export default function Home() {
  const [quote, setQuote] = useState<EpisodeQuote>(emptyEpisodeQuote())

  useEffect(() => {
    getRandomQuote(setQuote);
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <StyledButton title="Search" onPress={() => console.log('search pressed')} />
        <View style={{flex:1}} /> 
        <StyledButton title="Settings" onPress={() => console.log('settigns pressed')} />
      </View>
      <View style={{flex:1, marginVertical: 15}}>
        <QuoteView quote={quote} />
      </View>
      <View>
        <StyledButton title="Beer me a new quote!" onPress={() => {getRandomQuote(setQuote)}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 10,
  }
});
