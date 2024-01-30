// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Map from './pages/Map';
import Events from './pages/Events';
import GamesList from './pages/GamesList';
import EditProfile from "./pages/EditProfile";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Map" component={Map} />
                <Stack.Screen name="Events" component={Events} />
                <Stack.Screen name="Games" component={GamesList} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
