import 'react-native-gesture-handler';
import { useState } from 'react';
import Home from './pages/Home';
import { checkDatabase } from './SQLite/Quotes';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

export default function App() {
  checkDatabase();

  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerStyle: { backgroundColor: 'black' }, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'}}}>
        <Drawer.Screen name="Home" options={{title: 'Home'}} children={() => <Home />} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
