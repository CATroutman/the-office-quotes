import { useEffect, useState } from 'react';
import { View, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StyledButton from '../components/StyledButton';
import { getRandomQuote } from '../SQLite/Quotes';
import { EpisodeQuote, emptyEpisodeQuote } from '../types/EpisodeQuote';
import QuoteView from '../components/QuoteView';

const backgroundImage = require("../assets/black.png");

export default function Home() {
  const [quote, setQuote] = useState<EpisodeQuote>(emptyEpisodeQuote())

  useEffect(() => {
    getRandomQuote(setQuote);
  }, [])

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <SafeAreaView style={styles.safeArea}>
          <QuoteView quote={quote} />
          <View>
            <StyledButton title="Beer me a new quote!" onPress={() => {getRandomQuote(setQuote)}} />
          </View>
        </SafeAreaView>
      </ImageBackground>
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
  },
  image: {
    display: 'flex',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  safeArea: {
    display: 'flex',
    flex: 1,
  }
});
