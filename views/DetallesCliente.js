import React from 'react'
import { Headline,Text,Subheading,Button,FAB } from 'react-native-paper'
import { View,StyleSheet,Alert } from 'react-native'
import globalStyle from '../styles/global'
import axios from 'axios'


const DetallesCliente = ({route,navigation}) => {
  
  const {guardarconsultarAPI} =route.params
  const {nombre,telefono,correo,empresa,id}=route.params.item
  const mostrarConfirmacion = () =>{

   Alert.alert('Deseas eliminar este Cliente?','Un contacto eliminado no se puede recuperar',[
    {text:'Si eliminar',onPress:()=> eliminarContacto()},{text:'Cancelar',style:'cancel'}]
    
    
    )


  }
  
  const eliminarContacto  = async() =>{
    
    
    
    
    try {
      const url = `http://192.168.1.7:3000/clientes/${id}`
     await axios.delete(url)
      
     


    } catch (error) {
      console.log(error)
    }
//redireccionar
    navigation.navigate('Inicio');


    //consultar api
  guardarconsultarAPI(true)



  }
  return (
    <View style={globalStyle.contenedor}>
     
     <FAB style={globalStyle.fab} icon='pencil' onPress={()=>navigation.navigate("NuevoCliente",{cliente:route.params.item,guardarconsultarAPI})}/>
     
      <Headline style={globalStyle.titulo}>{nombre}</Headline>
    <Text style={styles.texto}>Empresa:<Subheading>{empresa} </Subheading> </Text>
    <Text style={styles.texto}>Correo:<Subheading>{correo} </Subheading> </Text>
    <Text style={styles.texto}>Telefono:<Subheading>{telefono} </Subheading> </Text>
    
<Button mode='contained' icon='cancel' 
onPress={()=>mostrarConfirmacion()}
style={styles.boton}>Elminar Cliente</Button>

    </View>
  )
}


const styles =StyleSheet.create({
  texto:{
marginBottom:20,
fontSize:18

  },boton:{
    marginTop:30,
    backgroundColor:'red'
  }



})
export default DetallesCliente
