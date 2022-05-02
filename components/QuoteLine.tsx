import { View, StyleSheet, Text, Image } from "react-native";
import { getCharacter } from '../util/Characters';

interface QuoteLineProps {
  line: string;
}

export default function QuoteLine(props: QuoteLineProps) {
  return (
    <View style={styles.container}>
      <View style={styles.character}>
        <View style={styles.characterBorder}>
          <Image style={styles.image} source={getCharacter(props.line)} />
        </View>
      </View>
      <View style={styles.quote}>
        <Text style={styles.text}>{props.line}</Text>
      </View>
    </View>
  );
};

const imageHeight = 80

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 5,
    marginBottom: 30,
  },
  character: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginRight: 10
  },
  characterBorder: {
    width: imageHeight + 4,
    height: imageHeight + 4,
    backgroundColor: 'white',
    borderRadius: (imageHeight + 4)/2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quote: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  text: {
    fontSize: 22,
  },
  image: {
    width: imageHeight,
    height: imageHeight,
    borderRadius: imageHeight/2,
  }
});
