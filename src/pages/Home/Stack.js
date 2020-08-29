import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Premium from '../premium/index';
import Teste from '../0-3/index'


const Stack = createStackNavigator();

export default function Router(){
    return(
        
            <Stack.Navigator initialRouteName="Home" headerMode="none">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Teste" component={Teste}/>
            </Stack.Navigator>
     

    );
}