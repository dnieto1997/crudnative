import React,{useState,useEffect} from 'react'
import { Text,View,SafeAreaView,StyleSheet,FlatList,ScrollView } from 'react-native'
import axios from 'axios'
import { List, Headline,Button,FAB } from 'react-native-paper'
import globalStyle from '../styles/global'


const Inicio = ({navigation}) => {
  
  //state de la app
const [clientes,guardarClientes] =useState([])
const [consultarAPI,guardarconsultarAPI] =useState(true);

  
 
  useEffect(()=>{
    const obtenerclienteApi= async () =>{

      try {
        
  const resultado =await axios.get('http://192.168.1.7:3000/clientes');
  guardarClientes(resultado.data)
 guardarconsultarAPI(false);
      } catch (error) {
        console.log(error)
      }
  
    }
  

       if(consultarAPI===true){
        obtenerclienteApi();
      }
    

  // },[clientes])

  },[consultarAPI]);
  
//<Button icon="plus-circle" onPress={()=>navigation.navigate("NuevoCliente",{guardarconsultarAPI})}> Nuevo Cliente</Button>
  
  return (
    
    
    <View style={globalStyle.contenedor} >
    
<Button icon="plus-circle" onPress={()=>navigation.navigate("NuevoCliente",{guardarconsultarAPI})}> Nuevo Cliente</Button>




      <Headline style={globalStyle.titulo} >{clientes.length>0?"Clientes":"Aun no hay Clientes"}</Headline>
      
      <FlatList
      data={clientes}
      keyExtractor={cliente=>(cliente.id).toString()}
      renderItem = {({item})=> (
      <List.Item
      title={item.nombre}
      description={item.empresa}
      onPress={()=>navigation.navigate('DetallesCliente',{item,guardarconsultarAPI})}
      
      
      />



      )}
      
      
      />


      <FAB
      icon="plus"  
      style={globalStyle.fab}  
      onPress={()=>navigation.navigate("NuevoCliente")}  
      />
       
    </View>
   
  )
}

export default Inicio
