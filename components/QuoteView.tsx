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
      <ScrollView style={styles.scrollView} contentContainerStyle={{alignItems: 'center'}} ref={scrollRef} >
        <View style={styles.episodeView}>
          <Text style={styles.text}><Text style={{fontWeight: '800', textDecorationLine: 'underline', fontStyle: 'normal'}}>{`${props.quote.seasonEp}`}</Text>: {props.quote.episodeName}</Text>
        </View>
        {quoteLines.map((line, index) => <QuoteLine line={line} key={index} />)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 15,
  },
  scrollView: {
    paddingTop: 15,
    width: '100%',
    borderBottomWidth: 0.2,
    borderBottomColor: 'white',
  },
  episodeView: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 2,
    justifyContent: 'center',
    maxWidth: '85%',
    marginBottom: 30,
  },
  text: {
    fontSize: 22,
    height: '100%',
    textAlign: 'center',
    fontWeight: '600',
    fontStyle: 'italic',
    color: 'white',
  },
});
