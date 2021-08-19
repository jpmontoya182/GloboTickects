import React from 'react';
import { StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home'
import Tickets from './components/Tickects/Tickects';
import Contact from './components/Contact/Contact';
import TickectPurchase from './components/Tickects/TickectPurchase'

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden />
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='Home'
          screenOptions={{headerMode:'screen'}}     
        >
          <Stack.Screen 
            name='Home'
            options={{
              headerShown: false
            }}
          >
            {(props) => <Home {...props} username='Sports Fan' />}
          </Stack.Screen> 
          <Stack.Screen 
            name='Tickets'
            component={Tickets}
            options={{
              headerTitleAlign: 'center',
              // headerTitleStyle: {fontFamily: 'Ubuntu-Regular'}
            }}
          /> 
          <Stack.Screen 
            name='Contact'
            component={Contact}
            options={{            
              headerTitleAlign: 'center',
              // headerTitleStyle: {fontFamily: 'Ubuntu-Regular'},
              headerTitle:'Contact Us'
            }}
          />
          <Stack.Screen
            name='Purchase'
            component={TickectPurchase}
            options={{
              headerTitleAlign: 'center',
              // headerTitleStyle: {fontFamily: 'Ubuntu-Regular'},
              headerTitle:'Purchase Tickects'
            }}
            />
        </Stack.Navigator>
      </NavigationContainer>      
    </>
  );
}
