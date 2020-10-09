import React from 'react';
import { View, StyleSheet,TouchableOpacity,Text,Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import {useFonts} from 'expo-font'
import borboletinha from '../../../assets/borboletinha.png'
import balao from '../../../assets/balao.jpg'
import { Delius_400Regular } from '@expo-google-fonts/delius';
// import { Container } from './styles';

const Primeiro = ({navigation}) => {
  const [loaded] = useFonts({
    DeliusRegular: Delius_400Regular,
  });

  if (!loaded) {
    return null;
  }
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
            <AntDesign name="arrowleft" color="#fff" size={30} style={styles.menu}/>
        </TouchableOpacity>
        <Text style={styles.title}>Leiturando</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.row}> 
  
        
       
        </View>

        <View style={styles.row}> 
          <TouchableOpacity style={styles.item} onPress={() => {navigation.navigate('borboletinha')}}>
              <Image style={styles.imagem} source={borboletinha}/>
              <Text style={styles.textoItem}>Borboletinha</Text>
          </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => {navigation.navigate('balao')}}>
              <Image style={styles.imagem} source={balao}/>
              <Text style={styles.textoItem}>Cai, Cai, Balão</Text>
          </TouchableOpacity>
      
        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff'
  },
  header: {
    marginTop:30,
     height:44,
     backgroundColor:'#48B86D',
     flexDirection:'row',
     alignItems:'center',
     
    },
     title: {
      marginLeft:110,
      color:'#fff',
     fontFamily:'DeliusRegular'

    },
    menu: {
      marginLeft: 30
    },
    body: {
      flex:1,
      alignItems:'center',
      marginTop:0,
      backgroundColor:'#48B86D'
    },
    item:{
        width:172,
        alignContent:'center',
        alignItems:'center',
        height:230,
        paddingTop:20,
        backgroundColor:'#fff',
        margin:20,
        borderColor:'#FC770E',
        borderWidth:3,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
       
    },
    textoItem: {
      marginLeft:7, 
      color:'#FC770E',
      fontFamily:'DeliusRegular',
      margin:10
    },
    imagem: {
      width:160, 
      height:160,
      borderTopLeftRadius:10,
      borderTopRightRadius:10
  

    },
    row: {
      
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    }
})
export default Primeiro;