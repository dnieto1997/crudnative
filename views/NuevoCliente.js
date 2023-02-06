import React ,{useState}from 'react'
import { Text,View,SafeAreaView,StyleSheet} from 'react-native'
import {TextInput,Headline,Button} from 'react-native-paper'
import globalStyle from '../styles/global'




const NuevoCliente = () => {
 
 
 const [nombre,guardarNombre] =useState('')
 const [telefono,guardarTelefono] =useState('')
 const [correo,guardarCorreo] =useState('')
 const [empresa,guardarEmpresa] =useState('')
 
 
 
  return (
    <View style={globalStyle.contenedor}>
      <Headline style={globalStyle.titulo} >
        Añadir nuevo cliente
      </Headline>
     
     <TextInput
     label="Nombre"
     placeholder='Escriba su nombre'
     style={style.input}
     onChangeText={texto => guardarNombre(texto)}
     value={nombre}
     
     />



<TextInput
     label="Telefono"
     placeholder='Escriba su telefono'
     style={style.input}
     onChangeText={texto => guardarTelefono(texto)}
     value={telefono}
     />

<TextInput
     label="Correo"
     placeholder='Escriba su Correo'
     style={style.input}
     onChangeText={texto => guardarCorreo(texto)}
     value={correo}
     />
 
 
 <TextInput
     label="Nombre empresa"
     placeholder='Escriba su nombre'
     style={style.input}
     onChangeText={texto => guardarEmpresa(texto)}
     value={empresa}
     />

 <Button icon="pencil-circle" >

  Guardar Cliente
 </Button>

    </View>
  )
}

 const style =StyleSheet.create({

  input:{

    marginBottom:3,
    backgroundColor:'transparent'
  }
 })


export default NuevoCliente
