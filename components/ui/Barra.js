import React from 'react'
import {Button} from 'react-native-paper'
import { color } from 'react-native-reanimated'

const BarraSuperior = ({navigation,route}) => {

  const handlePress =()=>{

    navigation.navigate("NuevoCliente")
  }

  return (

    <Button textColor='#FFF' icon="plus" onPress={()=>handlePress() }>
      Nuevo Cliente
    </Button>
  )
}

export default BarraSuperior
