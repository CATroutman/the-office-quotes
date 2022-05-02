import 'react-native-gesture-handler';
import { useState } from 'react';
import Home from './pages/Home';
import { checkDatabase } from './SQLite/Quotes';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

export default function App() {
  checkDatabase();
  const [title, setTitle] = useState('');

  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerStyle: { backgroundColor: 'black' }, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'}}}>
        <Drawer.Screen name="Home" options={{title: title}} children={() => <Home setTitle={setTitle} />} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
