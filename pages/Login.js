// Login.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LoginStyles as styles } from '../styles/LoginStyles.js';

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.titleText}>Board Mates</Text>
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={[styles.buttonContainer, styles.squaredButton, styles.smallButton]} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export { Login };