import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home/Home';
import zero_Tres from './pages/0-3/index';
import Borboletinha from './pages/0-3/borboletinha'
import Balao from './pages/0-3/balao'

const Stack = createStackNavigator();

export default function Router(){
    return(
        
            <Stack.Navigator initialRouteName="Home" headerMode="none">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="0-3" component={zero_Tres}/>
                <Stack.Screen name="borboletinha" component={Borboletinha}/>
                <Stack.Screen name="balao" component={Balao}/>
            </Stack.Navigator>
     

    );
}