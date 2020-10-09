import React from 'react';
import { View, StyleSheet, FlatList,TouchableOpacity,Text,Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import Imagem from '../../../assets/borboletinha2.jpg'



// import { Container } from './styles';

const Borboletinha = ({navigation}) => {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
            <AntDesign name="arrowleft" color="#fff" size={30} style={styles.menu}/>
        </TouchableOpacity>
        <Text style={styles.title}>Leiturando</Text>
      </View>

      <View style={styles.body}>
        <Image source={Imagem} style={styles.imagem}/>
        <Text style={{fontWeight:'bold',fontSize:17,marginTop:30,color:'#FC770E'}}>Borboletinha</Text>
       <Text style={styles.texto}>
        - Borboletinha tá na cozinha
        Fazendo chocolate
        Para a madrinha
        Poti-poti,perna de pau,olho de vidro e nariz de pica-pau
        Pau pau
        {'\n\n'}
        - Borboletão tá no fogão
        Fazendo macarrão
        Para o seu irmão
        Poti-poti,perna de pau,olho de vidro e nariz de pica-pau
        Pau pau
        {'\n\n'}
        - Borboletinha tá na cozinha
        Fazendo chocolate
        Para a madrinha
        Poti-poti, perna de pau,olho de vidro e nariz de pica-pau
        Pau pau
       </Text>
      
        
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
      fontWeight:'bold',

    },
    menu: {
      marginLeft: 30
    },
    body: {
      flex:1,
      alignItems:'center',
      marginTop:0,
      backgroundColor:'#fff'
    },
    imagem: {
      width:500,
      height:200
    },
    texto: {
      color:'#423c3c',
      marginTop:40,
      alignItems:'center',
      justifyContent:'center',
      width:370,
      fontSize:18,
      textAlign:'center',
      textAlignVertical:'center'
      
    }
  
})
export default Borboletinha;