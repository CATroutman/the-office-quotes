import { View, StyleSheet, Text } from "react-native";

interface QuoteLineProps {
  line: string;
}

export default function QuoteLine(props: QuoteLineProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.line}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 20,
    marginVertical: 20,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  text: {
    fontSize: 22,
  }
});
