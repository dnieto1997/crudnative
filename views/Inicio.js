import React,{useState,useEffect} from 'react'
import { Text,View,SafeAreaView,StyleSheet,FlatList } from 'react-native'
import axios from 'axios'
import { List, Headline } from 'react-native-paper'
import globalStyle from '../styles/global'

const Inicio = () => {
  
  //state de la app
const [clientes,guardarClientes] =useState([])

  
  
 
  useEffect(()=>{
    const obtenerclienteApi= async () =>{

      try {
        
  const resultado =await axios.get('http://192.168.1.7:3000/clientes');
  guardarClientes(resultado.data)
      } catch (error) {
        console.log(error)
      }
  
    }
  
    obtenerclienteApi()



  },[])
  return (
    <View style={globalStyle.contenedor} >
      
      <Headline style={globalStyle.titulo} >Clientes</Headline>
      
      <FlatList
      data={clientes}
      keyExtractor={cliente=>(cliente.id).toString()}
      renderItem = {({item})=> (
      <List.Item
      title={item.nombre}
      description={item.empresa}
      
      />



      )}
      
      
      />
    </View>
  )
}

export default Inicio
