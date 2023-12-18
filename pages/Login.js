// Login.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Top 40% of the screen */}
            <View style={styles.topContainer}>
                <Text style={styles.titleText}>Board Mates</Text>
            </View>

            {/* Bottom buttons */}
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={[styles.buttonContainer, styles.squaredButton, styles.smallButton]} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    topContainer: {
        flex: 2, // 40% of the screen
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3498db',
        height: '40%',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 20,

    },
    titleText: {
        fontSize: 24,
        color: '#fff',
    },
    buttonContainer: {
        flex: 1,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#3498db',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 16,
        color: '#3498db',
    },
    squaredButton: {
        aspectRatio: 1,
    },
    smallButton: {
        width: 50,
    },
});

export default Login;
