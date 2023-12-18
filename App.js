// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Map from './pages/Map';
import Events from './pages/Events';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Map" component={Map} />
                <Stack.Screen name="Events" component={Events} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
