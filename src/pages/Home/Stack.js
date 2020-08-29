import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Premium from '../premium/index';
import zero_Tres from '../0-3/index'


const Stack = createStackNavigator();

export default function Router(){
    return(
        
            <Stack.Navigator initialRouteName="Home" headerMode="none">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="0-3" component={zero_Tres}/>
            </Stack.Navigator>
     

    );
}