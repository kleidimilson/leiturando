import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './Stack';
import Premium from './pages/premium/index';



const Drawer = createDrawerNavigator();

export default function Router(){
    return(
        <NavigationContainer>
            <Drawer.Navigator  initialRouteName="Home"  drawerContentOptions={{activeBackgroundColor:'#28a745',inactiveTintColor:'#fff', activeTintColor:'#fff'}} drawerStyle={{backgroundColor:'#48B86D'}}>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Premium" component={Premium}/>
            </Drawer.Navigator>
        </NavigationContainer>

    );
}