// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { enableLatestRenderer } from 'react-native-maps';
import { enableScreens } from 'react-native-screens';
import { Home } from './navigations/Home';
import { Profile } from './pages/Profile';
import { Map } from './pages/Map';
import { Events } from './pages/Events';
import { AddEvent } from './pages/AddEvent';
import { Login } from './pages/Login';
import { showEvent } from './components/ShowEvent';

const Stack = createStackNavigator();
enableLatestRenderer();
enableScreens();

const App = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="Map" component={Map} options={({ navigation, route }) => ({
                        headerShown: false
                    })}/>
                    <Stack.Screen name="ShowEvent" component={showEvent} />
                    <Stack.Screen name="Events" component={Events} />
                    <Stack.Screen name="AddEvent" component={AddEvent} />
                    <Stack.Screen name="Login" component={Login} />
                </Stack.Navigator>
            </NavigationContainer>
        </LocalizationProvider>
    );
};

export { App };