import React from 'react';
import { View,StyleSheet,TouchableOpacity,Text, Image } from 'react-native';

import {Entypo} from '@expo/vector-icons'
import Carrinho from '../../../assets/carrinho.png'
import Bebe from '../../../assets/bebe.png'
import Infantil from '../../../assets/infantil.png'
import Animacao from '../../../assets/animacao.gif'



const Home = ({navigation}) => {
    
    function AbrirMenu() {
        navigation.openDrawer();
    }
   
    return(
        <View>
            <View style={styles.header}>
                <TouchableOpacity onPress={AbrirMenu}>
                    <Entypo name="menu" color="#fff" size={35} style={styles.menu}/>
                </TouchableOpacity>
                <Text style={styles.title}>Leiturando</Text>
            </View>
        <View style={styles.boasVindas}> 
                <Image style={{width:100,height:100, marginLeft:20}} source={Animacao}/>
                <Text style={{color:'#fff', marginLeft:30, fontWeight:'bold'}}>Olá Bem vindo!</Text>
            
        </View>
        <View style={styles.body}>
            <TouchableOpacity style={styles.item1} onPress={() => {navigation.navigate('0-3')}}>
                    <Image style={styles.imagem} source={Carrinho}/>
                    <View style={{marginLeft:10}}>
                        <Text style={{color:'#fff', fontSize:18, fontWeight:'bold', marginBottom:10}}>0 - 3 anos</Text>
                        <Text style={{width:250, color:'#fff', fontSize:14}}> Nesta fase da vida, o papel do mediador é essencial no momento da leitura compartilhada.</Text>
                    </View>

            </TouchableOpacity>

            <TouchableOpacity  style={styles.item2}>
                    <Image style={styles.imagem} source={Bebe}/>
                    <View style={{marginLeft:10}}>
                        <Text style={{color:'#fff', fontSize:18, fontWeight:'bold', marginBottom:10}}>3 - 6 anos</Text>
                        <Text style={{width:250, color:'#fff', fontSize:14}}> Dos 3 aos 6 anos, o  mundo do faz de conta permeia a realidade e os pequenos se ocupam das brincadeiras.</Text>
                    </View>

            </TouchableOpacity>

            <TouchableOpacity style={styles.item3}>
                    <Image style={styles.imagem} source={Infantil}/>
                    <View style={{marginLeft:10}}>
                        <Text style={{color:'#fff', fontSize:18, fontWeight:'bold', marginBottom:10}}>6 - 8 anos</Text>
                        <Text style={{width:250, color:'#fff', fontSize:14}}> Nessa fase,  os pequenos  passam a definir melhor seus gostos e a terem uma visão mais curiosa sobre o mundo .</Text>
                    </View>

            </TouchableOpacity>
            
                
        </View>
        </View>
    )
  
}

const styles = StyleSheet.create({
    header: {
       marginTop:30,
        height:44,
        backgroundColor:'#48B86D',
        flexDirection:'row',
        alignItems:'center',
        
    },
    menu: {
        marginLeft: 30
    },
    title: {
        marginLeft:110,
        color:'#fff',
        fontWeight:'bold',
      
    },
    boasVindas: {
        
        backgroundColor:'#48B86D',
        height:200,
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30,
        justifyContent:'center',
        alignItems:'center'
        
    },
    body: {
        alignItems:'center',
        marginTop:14,
    
    },
    item1: {
        backgroundColor:'#FC770E',
        height:146,
        width:353,borderRadius:13,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20
    },
    item2: {
        backgroundColor:'#009B8F',
        height:146,
        width:353,borderRadius:13,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20
    },
    item3: {
        backgroundColor:'#C12B00',
        height:146,
        width:353,borderRadius:13,
        flexDirection:'row',
        alignItems:'center'
    },
    imagem : {
        width:107,
        height:107,
        marginLeft:-30
    }
})

export default Home;