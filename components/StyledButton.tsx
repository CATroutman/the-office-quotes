import { View, StyleSheet, Pressable, Text, GestureResponderEvent } from 'react-native';

interface StyledButtonProps {
  onPress(event: GestureResponderEvent): void;
  title: string;
}

export default function StyledButton(props: StyledButtonProps) {
  return (
    <View style={styles.container}>
      <Pressable style={({pressed}) => [pressed ? styles.pressed : styles.base, styles.pressable]} onPress={props.onPress} >
        <Text style={styles.text}>{props.title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  base: {
    backgroundColor: '#38BDF8',
  },
  pressed: {
    backgroundColor: '#0369A1',
  },
  pressable: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  text: {
    color: '#0F172A',
    fontSize: 26,
    fontWeight: '500',
  }
});
