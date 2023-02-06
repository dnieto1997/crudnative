import 'react-native-gesture-handler';
import React from 'react'
import { Text,View,SafeAreaView,StyleSheet } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator } from '@react-navigation/stack';



const Stack =createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
  <Stack.Navigator>
     
     <Stack.Screen>
      
     </Stack.Screen>


  </Stack.Navigator>




      </NavigationContainer>
    </>
  )
}
export default App
