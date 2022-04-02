import { useEffect, useRef } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { EpisodeQuote } from "../types/EpisodeQuote";
import QuoteLine from './QuoteLine';

interface QuoteViewProps {
  quote: EpisodeQuote;
}

export default function QuoteView(props: QuoteViewProps) {
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: false
    });
  }, [props.quote])

  const quoteLines = props.quote.quoteText.split('\n');

  return (
    <View style={styles.container}>
      <View style={styles.episodeView}>
        <Text style={styles.text}><Text style={{fontWeight: '800', textDecorationLine: 'underline', fontStyle: 'normal'}}>{`${props.quote.seasonEp}`}</Text>: {props.quote.episodeName}</Text>
      </View>
      <ScrollView style={styles.scrollView} ref={scrollRef} >
        {quoteLines.map((line, index) => <QuoteLine line={line} key={index} />)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  scrollView: {
    width: '100%',
  },
  episodeView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    maxWidth: '85%',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 22,
    height: '100%',
    textAlign: 'center',
    fontWeight: '600',
    fontStyle: 'italic'
  },
});
