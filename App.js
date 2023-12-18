import React from 'react';
<<<<<<< Updated upstream
import HomeScreen from './screens/HomeScreen'; // Update the path

export default function App() {
  return (
      <HomeScreen />
  );
}
=======
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Map from './pages/Map';
import Events from './pages/Events';
import Login from './pages/Login';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Map" component={Map} />
                <Stack.Screen name="Events" component={Events} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
>>>>>>> Stashed changes
