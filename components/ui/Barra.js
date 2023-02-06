import React from 'react'
import {Button} from 'react-native-paper'


const BarraSuperior = ({navigation,route}) => {

  const handlePress =()=>{

    navigation.navigate("NuevoCliente")
  }

  return (

    <Button textColor='#FFF' icon="Plus-circle" onPress={()=>handlePress() }>
      Nuevo Cliente
    </Button>
  )
}

export default BarraSuperior
