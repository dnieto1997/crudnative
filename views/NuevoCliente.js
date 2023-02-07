import React ,{useState}from 'react'
import {Text,View,SafeAreaView,StyleSheet,Platform} from 'react-native'
import {TextInput,Headline,Button,Paragraph,Dialog,Portal} from 'react-native-paper'
import globalStyle from '../styles/global'
import axios from 'axios'



const NuevoCliente = () => {
 
 
 const [nombre,guardarNombre] =useState('')
 const [telefono,guardarTelefono] =useState('')
 const [correo,guardarCorreo] =useState('')
 const [empresa,guardarEmpresa] =useState('')
 const [alerta,guardarAlerta] =useState(false)
 
 //almacena
const guardarCliente = async()=>{

  //validar

  if(nombre===''||telefono===''||correo===''||empresa===''){

  guardarAlerta(true)
   return;
  }


  //generar el cliente
 const cliente={nombre,telefono,empresa,correo};

    
//guardarcliente en la api

try {
  //para android
 if(Platform.OS=='ios'){
  await axios.post('http://localhost:3000/clientes',cliente)

 }else{
  await axios.post('http://10.0.2.2:3000/clientes',cliente)

 }
 
  

} catch (error) {
  console.log(error)
 
 
}




}




 
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

 <Button icon="pencil-circle" mode='contained' onPress={()=>guardarCliente()}>

  Guardar Cliente
 </Button>

<Portal>

    <Dialog visible={alerta} onDismiss={()=>guardarAlerta(false)}>
      <Dialog.Title>Error</Dialog.Title>
      <Dialog.Content>
        <Paragraph>Todos los campos son obligatorios</Paragraph>
      </Dialog.Content>
<Dialog.Actions>
  <Button onPress={()=>guardarAlerta(false)}>Ok</Button>
</Dialog.Actions>

    </Dialog>
</Portal>

 

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
