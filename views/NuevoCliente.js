import React from 'react'
import { Text,View,SafeAreaView,StyleSheet} from 'react-native'
import {TextInput,Headline,Button} from 'react-native-paper'
import globalStyle from '../styles/global'


const NuevoCliente = () => {
  return (
    <View>
      <Headline style={globalStyle.titulo} >
        Añadir nuevo cliente
      </Headline>


    </View>
  )
}

export default NuevoCliente
