import 'react-native-gesture-handler';
import React from 'react'
import { Text,View,SafeAreaView,StyleSheet,ScrollView } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator } from '@react-navigation/stack';
import Inicio from './views/Inicio';
import NuevoCliente from './views/NuevoCliente';
import DetallesCliente from './views/DetallesCliente';
import BarraSuperior from './components/ui/Barra';
import{DefaultTheme,Provider as PaperProvider}from 'react-native-paper'


const Stack =createStackNavigator();

//definir tema

const theme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:'#1774F2',
    accent:'#0655BF'
  }
  
}


const App = () => {
  return (
    <>

<PaperProvider>

      <NavigationContainer>
  <Stack.Navigator initialRouteName='Inicio' 
  screenOptions={{
    headerStyle:{
   backgroundColor:theme.colors.primary
}, 
headerTintColor:theme.colors.surface,
headerTitleStyle:{
  fontWeight:'bold'
}
 //para pasar props entre scren  |
                              // |
                              // *
}}>
     
     <Stack.Screen name='Inicio' component={Inicio} options ={({navigation,route})=>({
   
   headerTitleAlign:'center',
   headerLeft:(props)=> <BarraSuperior {...props} 
   navigation={navigation}
   route={route}/>


     })} />
     <Stack.Screen name='NuevoCliente' component={NuevoCliente} options={{title:"Nuevo Clientes"}}/>
     <Stack.Screen name='DetalleCliente' component={DetallesCliente} options={{title:"Detalles Clientes"}}/>

  </Stack.Navigator>


      </NavigationContainer>
      </PaperProvider>
    </>
  )
}
export default App
