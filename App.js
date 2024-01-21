// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Home } from './navigations/Home';
import { Profile } from './pages/Profile';
import { Map } from './pages/Map';
import { Events } from './pages/Events';
import { AddEvent } from './pages/AddEvent';
import { Login } from './pages/Login';

const Stack = createStackNavigator();

const App = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="Map" component={Map} />
                    <Stack.Screen name="Events" component={Events} />
                    <Stack.Screen name="AddEvent" component={AddEvent} />
                    <Stack.Screen name="Login" component={Login} />
                </Stack.Navigator>
            </NavigationContainer>
        </LocalizationProvider>
    );
};

export { App };