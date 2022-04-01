import { View, StyleSheet, Button } from 'react-native';
import StyledButton from '../components/StyledButton';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <StyledButton title="Search" onPress={() => console.log('search pressed')} />
        <View style={{flex:1}} /> 
        <StyledButton title="Settings" onPress={() => console.log('settigns pressed')} />
      </View>
      <View style={{flex:1}}>
        
      </View>
      <View>
        <StyledButton title="Beer me a new quote!" onPress={() => console.log('new quote pressed')} />
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
