import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home/Home';
import Premium from './pages/premium/index';
import zero_Tres from './pages/0-3/index';
import Borboletinha from './pages/0-3/03historia1'


const Stack = createStackNavigator();

export default function Router(){
    return(
        
            <Stack.Navigator initialRouteName="Home" headerMode="none">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="0-3" component={zero_Tres}/>
                <Stack.Screen name="borboletinha" component={Borboletinha}/>
            </Stack.Navigator>
     

    );
}