import React from 'react';
import { View, StyleSheet, FlatList,TouchableOpacity,Text,Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import Imagem from '../../../assets/balao2.jpg'



// import { Container } from './styles';

const Balao = ({navigation}) => {
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
        <Text style={{fontWeight:'bold',fontSize:17,marginTop:30,color:'#FC770E'}}>Cai, Cai, Balão</Text>
       <Text style={styles.texto}>
        - Cai cai balão, cai cai balão
        Aqui na minha mão
        Não Cai não, não cai não, não cai não
        Cai na rua do Sabão
        {'\n\n'}
        - Cai cai balão, cai cai balão
        Aqui na minha mão
        Não Cai não, não cai não, não cai não
        Cai na rua do Sabão
        {'\n\n'}
    
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
      width:400,
      height:200,
        
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
export default Balao;